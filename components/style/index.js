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
    }
})

export default style