import React, { useState } from 'react'
import { View, ScrollView, AsyncStorage} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherCard, { TeacherProps } from '../../components/TeacherCard'

import styles from './styles'

function Favorites() {
    const [ favorites, setFavorites] = useState([])

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){  
                const favoritedTeachers = JSON.parse(response) 
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites()
    })

    return(
        <View style={styles.container}>
            <PageHeader
                title="Meus proffys favoritos"
            />

            <ScrollView 
                style={styles.teacherList}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 24,
                }}
            >                
            {favorites.map((teacher: TeacherProps) => {
                return (
                    <TeacherCard 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited
                    />  
                    )
                }        
            )}
                    
            </ScrollView>           
        </View>
    )
}

export default Favorites