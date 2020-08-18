import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-around",
        height: 50,
        alignItems: 'center'
    },
    filterTextActived:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#DD6F20'
    },
    filterTextInative:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#23295E',
        opacity: 0.5
    },
    content:{
        width: '100%',
        marginTop: 20,
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#23295E',
        alignItems: 'center'
    },
    titleText: {
        color: '#23295E',
        fontSize: 18,
        position: 'relative',
        top: 10,
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    }
})

export default styles