import React from 'react'
import { View, ScrollView } from 'react-native'

import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'

import avatar from '../../assets/images/avatar.jpg'

import styles from './styles'

function TeacherList() {    
    
    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <PageHeader 
                title="Proffys Disponíveis"
                searchFilter={true}
            />

            <View style={styles.teacherList}>                
                <TeacherCard
                    avatar={avatar}
                    name="Bruno Mariani"
                    subject="Inglês"
                    bio="Node, ReactJS and React Native and loving it! I'm making use of all the public material put out with care, love and effort by the community with special thanks to Rocketseat, Cod3r, Alura, Devsoutinho, B7Web, Matheus Silva and many others."
                    cost={80.00}
                    like={true}
                    whatsapp={47988776655}
                />
                <TeacherCard
                    avatar={avatar}
                    name="Bruno Mariani"
                    subject="Inglês"
                    bio="Node, ReactJS and React Native and loving it! I'm making use of all the public material put out with care, love and effort by the community with special thanks to Rocketseat, Cod3r, Alura, Devsoutinho, B7Web, Matheus Silva and many others."
                    cost={80.00}
                    like={true}
                    whatsapp={47988776655}
                />
            </View>            
        </ScrollView>
    )
}

export default TeacherList