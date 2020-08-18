import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    card: {
        width: '92%',
        justifyContent: 'space-between',
        padding: 12,
        marginVertical: 7, 
        height: 80,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { 
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeIcon: {
        width: 50,
        height: 50,
    },
    cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardDate: {
        color: '#DD6F20',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardTime: {
        color: '#707070'
    },
    done: {
        opacity: 0.5
    }

})

export default styles