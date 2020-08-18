import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#23295E',
        borderTopWidth: 5,
        borderTopColor: '#DD6F20',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    button:{
        position: 'relative',
        top: -40
    },
    image:{
        width: 80,
        height: 80
    },
    text:{
        position: 'relative',
        top: -35,
        color: '#FFF'
    }
})

export default styles