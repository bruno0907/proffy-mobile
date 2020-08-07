import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex: 1,
        justifyContent: 'center', 
        marginTop: 30,       
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFFFFF',
        fontSize: 32,
        lineHeight: 37,
        width: 170,        
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        width: 233,
        marginTop: 32,
    },
    ctaButton: {
        marginTop: 40,        
        marginBottom: 20,
        height: 55,
        backgroundColor: '#04BF58',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ctaButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFFFFF',
        fontSize: 16,         
    },
})

export default styles