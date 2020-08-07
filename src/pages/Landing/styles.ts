import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8257E5',
        padding: 40,
    },

    banner:{
        width: '100%',
        resizeMode: 'contain',
    },

    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 40,
    },
    button:{
        width: '47%',
        height: 170,
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary:{
        backgroundColor: '#9871F5',
    },

    buttonSecondary:{
        backgroundColor: '#04D361',
    },

    buttonText:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#FFFFFF'
    },

    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,        
        color: '#D4C2FF',
    },
})

export default styles