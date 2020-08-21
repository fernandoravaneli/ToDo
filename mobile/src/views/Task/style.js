import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageIcon:{
        width: 40,
        height: 40,
        marginHorizontal: 5,
        resizeMode: 'contain'
    },
    label:{
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#DD6F20',
        marginHorizontal: 10
    },
    inputArea: {
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#DD6F20',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 80,
        textAlignVertical: 'top'
    },
    inLine:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 80
    },
    inputInline:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    switchLabel:{
        fontWeight: 'bold',
        color: '#DD6F20',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10
    },
    removeLabel:{
        fontWeight: 'bold',
        color: '#23295E',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    typeIconInative: {
        opacity: 0.5
    }

})

export default styles