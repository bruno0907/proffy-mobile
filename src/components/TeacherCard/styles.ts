import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        borderRadius: 8,  
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E6E6F0',
    },
    header:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    avatar:{
        width: 64,
        height: 64,
        backgroundColor: '#000',
        borderRadius: 32,
        marginRight: 16,
    },
    profileInfo:{
        height: 80,
        alignItems: 'flex-start',
        justifyContent: 'center'        
    },
    name:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#32264D',
    },
    subject:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#6A6180'
    },
    bio:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180',     
        paddingHorizontal: 20,
        marginVertical: 20,   
    },
    footer:{
        backgroundColor: '#FAFAFC',
        borderTopWidth: 1,
        borderTopColor: '#E6E6F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceHour:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,        
        color: '#6A6180',
        marginVertical: 20,
    },
    cost:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: '#8257E5',
    },
    buttonArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    buttonFavorite:{
        backgroundColor: '#8257E5',
        width: 55,
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    favorited:{
        backgroundColor: '#E33D3D',
    },

    buttonWhatsapp:{
        flex: 1,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#04D361',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    buttonWhatsappText:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 14,
        color: '#FFF',
    }
})

export default styles