import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {  
        justifyContent: 'center',
        backgroundColor: '#8257E5',
        paddingTop: 40,
        paddingBottom: 80,        
        paddingHorizontal: 21,        
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#FFFFFF',
        fontSize: 24, 
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,     
    },
    filterField:{
        paddingHorizontal: 16,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: '#9871F5',
    },
    filterFieldInput:{
        height: 40,
        width: '100%',
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 16,
    }
})

export default styles