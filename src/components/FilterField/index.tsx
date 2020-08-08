import React, { useState, useEffect } from 'react'
import { View, Text, Picker } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'

interface Props{
    teacherList?: Array<String>,
}

const FilterField: React.FC<any> = () => {
    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')
    const [ filterLabel, setFilterLabel ] = useState('Filtrar por dia, hora e matéria')
    const [ teachers, setTeachers ] = useState([])

    async function handleFilter(){        
        setFilterLabel(`${subject}, ${week_day}, ${time}`)
        // console.log({subject, time, week_day})
        toggleFilterVisibility()
        setSubject('')
        setWeekDay('')
        setTime('')

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setTeachers(response.data)        
    }

    const [ filterVisibility, setFilterVisibility ] = useState(false)

    function toggleFilterVisibility(){
        setFilterVisibility(!filterVisibility)
    }

    return(

        <View style={styles.container}>

            <RectButton style={styles.filterCollapse} onPress={toggleFilterVisibility}>
                <Ionicons name="ios-funnel" size={24} color="#04D361" style={{ marginRight: 12 }} />
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
                    <TextInput
                        style={styles.input}
                        placeholder="Qual a materia"
                        value={subject}
                        onChangeText={value => setSubject(value)}
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o dia?"
                                value={week_day}
                                onChangeText={value => setWeekDay(value)}
                            />
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
    )
}

export default FilterField