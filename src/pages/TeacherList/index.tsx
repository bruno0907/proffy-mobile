import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Picker, Alert, AsyncStorage } from 'react-native'

import { RectButton, TextInput } from 'react-native-gesture-handler'

import { Feather, Ionicons } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherCard, { TeacherProps } from '../../components/TeacherCard'

import api from '../../services/api'

import styles from './styles'

const listOfWeekDays = [    
    {value: '0', name: 'Domingo'},
    {value: '1', name: 'Segunda-feira'},
    {value: '2', name: 'Terça-feira'},
    {value: '3', name: 'Quarta-feira'},
    {value: '4', name: 'Quinta-feira'},
    {value: '5', name: 'Sexta-feira'},
    {value: '6', name: 'Sábado'}
]

const listOfSubjects = [
    {value: 'Inglês', name: 'Inglês'},
    {value: 'Matemática', name: 'Matemática'},
    {value: 'Química', name: 'Química'},
]
function TeacherList(){
    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')
    const [ filterLabel, setFilterLabel ] = useState('Filtrar por Matéria, dia e hora...')
    const [ teachers, setTeachers ] = useState([])
    const [ favorites, setFavorites] = useState<number[]>([])

    const [ msg, setMsg] = useState('Utilize o filtro acima para pesquisar por proffys!')

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){  
                const favoritedTeachers = JSON.parse(response)     
                const favoritedTeachersIds = favoritedTeachers.map((teacher: TeacherProps) =>{
                    return teacher.id
                })         
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    useEffect(() => {
        teachers.length <= 0 ? setMsg('Nenhum proffy foi encontrado!') : setMsg('')
    }, [handleFilter])
    
    const [ filterVisibility, setFilterVisibility ] = useState(false)

    function toggleFilterVisibility(){
        setFilterVisibility(!filterVisibility)
    }

    async function handleFilter(){
        loadFavorites()
        let day = undefined
        switch(week_day){
            case '0':
                day = 'Domingo'
                break
            case '1':
                day = 'Segunda'
                break
            case '2':
                day = 'Terça'
                break
            case '3':
                day = 'Quarta'
                break
            case '4':
                day = 'Quinta'
                break
            case '5':
                day = 'Sexta'
                break
            case '6':
                day = 'Sábado'
                break
            default:
                day = 'Selecione'
        }
        
        if(subject === ""){
            return Alert.alert('Oops! Parece que houve um erro', 'É preciso escolher uma matéria')
        }
        if(day === 'Selecione'){
            return Alert.alert('Oops! Parece que houve um erro', 'É preciso escolher um dia da semana')
        }
        if(time === ""){
            return Alert.alert('Oops! Parece que houve um erro', 'É preciso escolher um horário')
        }
        
        setFilterLabel(`${subject}, ${day}, ${time}`)             
        toggleFilterVisibility()
        setSubject('')
        setWeekDay('')
        setTime('')

        try {
            const response = await api.get('/classes', {
                params: {
                    subject,
                    week_day,
                    time
                }
            })    
            const { data } = response
            setTeachers(data) 
        } catch (e) {
            return Alert.alert('Oops, parece que houve um erro!', 'Não foi possível atender a sua solicitação')
        }       
    }
    
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis">                
                <View style={styles.filterForm}>

                    <RectButton style={styles.filterCollapse} onPress={toggleFilterVisibility}>
                        <Feather name="filter" size={24} color="#04D361" style={{ marginRight: 12 }} />
                        <Text style={styles.collapseLabel}>{filterLabel}</Text>
                        <Ionicons 
                            name={!filterVisibility ? "ios-arrow-down" : "ios-arrow-up"} 
                            size={24} color="#D4C2FF" 
                        />    
                    </RectButton>

                    <View style={styles.divider}></View>

                    { filterVisibility && 
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Matéria</Text>
                            <View style={styles.input}>
                                <Picker 
                                    style={styles.selector}
                                    selectedValue={subject}
                                    onValueChange={itemValue => setSubject(itemValue)}
                                >
                                    <Picker.Item value="Selecione" label="Selecione" />
                                    { listOfSubjects.map(subject => (
                                        <Picker.Item key={subject.value} value={subject.value} label={subject.name} />
                                    ))}
                                </Picker>   
                            </View>                            
                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <View style={styles.input}>
                                        <Picker 
                                            style={styles.selector}
                                            selectedValue={week_day}
                                            onValueChange={itemValue => setWeekDay(itemValue)}
                                        >
                                            <Picker.Item value="Selecione" label="Selecione" />
                                            { listOfWeekDays.map(weekDays => (
                                                <Picker.Item key={weekDays.value} value={weekDays.value} label={weekDays.name} />
                                            ))}
                                        </Picker>
                                    </View>
                                </View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder="Qual a hora?"
                                        value={time}
                                        onChangeText={value => setTime(value)}
                                    />
                                </View>
                            </View>
                            <RectButton style={styles.searchButton} onPress={handleFilter}>
                                <Text style={styles.searchButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>              
                    }                 

                </View>

            </PageHeader>
                <Text>{msg}</Text>
            <ScrollView 
                style={styles.teacherList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 24,
                }}
            >   
                {teachers.map((teacher: TeacherProps) => 
                    <TeacherCard 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />                
                )}
            </ScrollView>         
        </View>
    )
}

export default TeacherList