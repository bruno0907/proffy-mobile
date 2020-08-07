import React from 'react'
import { View, Image, Text, Picker } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton  } from 'react-native-gesture-handler'

import { Ionicons } from '@expo/vector-icons'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'

interface Props {
    title: string,
    searchFilter?: boolean,
}

const PageHeader: React.FC<Props> = ({ title, searchFilter }) => {
    const navigation = useNavigation()
    function handleGoBack() {
        navigation.navigate('Landing')
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={logoImg} resizeMode="contain"/>
                </BorderlessButton>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>            
            { searchFilter &&
            <View style={styles.filterField}>
                <Ionicons name="ios-funnel" size={24} color="#04D361" style={{ marginRight: 12}}/>
                <Picker mode="dropdown" style={styles.filterFieldInput}>
                    <Picker.Item label="Filtrar por dia, hora e matéria" value="" />
                </Picker>
            </View>
            }
        </View>
    )
}

export default PageHeader