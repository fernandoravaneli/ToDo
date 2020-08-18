import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#23295E',
        borderBottomWidth: 5,
        borderBottomColor: '#DD6F20',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 50
    },
    notification: {
        position: 'absolute',
        right: 20
    },
    notificationImage: {
        width: 30,
        height: 35
    },
    notificationText:{
        fontWeight: 'bold',
        color: '#DD6F20'
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },
    leftIcon: {
        position: 'absolute',
        left: 20
    },
    leftIconImage: {
        width: 30,
        height: 30
    }

})

export default styles