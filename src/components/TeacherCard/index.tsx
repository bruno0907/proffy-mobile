import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartIcon from '../../assets/images/icons/heart-outline.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

interface Props{
    avatar: string,
    name: string, 
    subject: string,
    bio: string,
    cost: number,
    whatsapp: number,
    like: boolean,
}

const TeacherCard: React.FC<Props> = ({ avatar, name, subject, bio, cost, whatsapp, like }) => {
    return (
        <View style={styles.teacherCard}>
            <View style={styles.teacherCardHeader}>
                <Image source={avatar} style={styles.teacherAvatar}/>
                <View style={styles.teacherInfo}>
                    <Text style={styles.teacherName}>{name}</Text>
                    <Text style={styles.teacherSubject}>{subject}</Text>
                </View>
            </View>
            <View style={styles.teacherCardBody}>
                <Text style={styles.teacherBio}>{bio}</Text>
            </View>
            <View style={styles.teacherCardFooter}>
                <View style={styles.teacherCardFooterInfo}>
                    <Text style={styles.priceHour}>Preço/hora</Text>
                    <Text style={styles.teacherCost}>R$ {cost}</Text>
                </View>
                <View style={styles.teacherCardButtonArea}>
                    <RectButton style={styles.teacherCardButtonLike}>
                        <Image source={heartIcon} />
                    </RectButton>
                    <RectButton style={styles.teacherCardButtonWhatsapp} onPress={() => {whatsapp}}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.teacherCardButtonWhatsappText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherCard