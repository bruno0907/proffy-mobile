import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    teacherCard:{
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,  
        marginBottom: 16,
        overflow: 'hidden'    ,
    },
    teacherCardHeader:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    teacherAvatar:{
        width: 64,
        height: 64,
        backgroundColor: '#000',
        borderRadius: 32,
        marginRight: 16,
    },
    teacherInfo:{
        height: 80,
        alignItems: 'flex-start',
        justifyContent: 'center'        
    },
    teacherName:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#32264D',        
    },
    teacherSubject:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#6A6180'
    },
    teacherCardBody:{     
    },
    teacherBio:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6A6180',     
        paddingHorizontal: 20,   
    },
    teacherCardFooter:{
        backgroundColor: '#FAFAFA',
        borderTopWidth: 1,
        borderTopColor: '#E6E6F0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    teacherCardFooterInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    priceHour:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,        
        color: '#6A6180',
        marginRight: 14
    },
    teacherCost:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: '#8257E5',
    },
    teacherCardButtonArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    teacherCardButtonLike:{
        backgroundColor: '#8257E5',
        width: 55,
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    teacherCardButtonWhatsapp:{
        flex: 1,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#04D361',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    teacherCardButtonWhatsappText:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
        color: '#FFF',
    }
})

export default styles