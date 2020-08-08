import React, { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { RectButton } from 'react-native-gesture-handler'

import favoriteIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

export interface TeacherProps{
    id: number;
    avatar: string;
    name: string; 
    subject: string;
    bio: string;
    cost: number;
    whatsapp: number;
}

interface CardProps{
    teacher: TeacherProps;
    favorited: boolean;
}

const TeacherCard: React.FC<CardProps> = ({ teacher, favorited }) => {
    const [ isFavorited, setIsFavorited ] = useState(favorited)

    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?text=Olá ${teacher.name}! Quero ter aulas de ${teacher.subject} contigo. Podemos nos conectar?&phone=55${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []
            
        if(favorites){
            favoritesArray = JSON.parse(favorites)
        }

        if(isFavorited){
            // remover dos favoritos
            const favoriteIndex = favoritesArray.findIndex((teacherItem: TeacherProps) => {
                return teacherItem.id === teacher.id
            })

            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorited(false)
        } else {
            // adicionar aos favoritos    
            favoritesArray.push(teacher)            
            setIsFavorited(true)
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: teacher.avatar }} style={styles.avatar}/>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>

                    <Text style={styles.priceHour}>
                        Preço/hora
                        {'   '}
                        <Text style={styles.cost}>R$ {teacher.cost}</Text>
                    </Text>
                <View style={styles.buttonArea}>
                    <RectButton 
                        style={[
                            styles.buttonFavorite, 
                            isFavorited ? styles.favorited : {} ]}
                        onPress={handleToggleFavorite}
                        >
                            { isFavorited 
                                ? <Image source={unfavoriteIcon} /> 
                                : <Image source={favoriteIcon} /> 
                            }
                    </RectButton>
                    <RectButton style={styles.buttonWhatsapp} onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.buttonWhatsappText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherCard