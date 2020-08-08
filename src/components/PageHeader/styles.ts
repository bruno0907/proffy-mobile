import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {  
        justifyContent: 'center',
        backgroundColor: '#8257E5',
        paddingVertical: 50,
        paddingHorizontal: 30,        
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
        marginVertical: 30,             
    },    
})

export default styles