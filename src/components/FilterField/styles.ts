import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop: -10,
    },
    filterCollapse:{
        paddingHorizontal: 8,
        // marginBottom: 8,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    collapseLabel:{
        flex: 1,
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 16,
    },
    divider:{  
        flex: 1,     
        borderTopWidth: 1,
        borderTopColor: '#9871F5',
        marginBottom: 16,
    },    
    searchForm:{
        marginBottom: 8,  
    },
    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock:{
        width: '48%',
    },
    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
    },
    input: {
        height: 56,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    searchButton:{
        height: 56,
        borderRadius: 8,
        backgroundColor: '#04D361',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  
        marginTop: 4,  
    },
    searchButtonText:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 14,
        color: '#FFF',
    },
})

export default styles