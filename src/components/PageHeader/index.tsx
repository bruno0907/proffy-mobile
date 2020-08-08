import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton  } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles'

interface Props {
    title: string,
}

const PageHeader: React.FC<Props> = ({ title, children }) => {
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
            {children}
        </View>
    )
}

export default PageHeader