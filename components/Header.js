import React from 'react'
import { View, Text } from 'react-native'
import style from './style/index'

const Header = ({ title }) => {
    return (
        <View style={style.header}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}



export default Header
