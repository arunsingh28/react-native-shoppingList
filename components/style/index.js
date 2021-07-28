import { StyleSheet } from 'react-native'



const style = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'purple'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        padding: 15,
        width: '100%',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        borderBottomColor: 'black'
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default style