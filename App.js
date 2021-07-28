import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Header from './components/Header'
import style from './components/style/index'




const App = () => {

  const [items, setItems] = useState([
    { id: Math.floor(100000 + Math.random() * 900000), text: 'Milk' },
    { id: Math.floor(100000 + Math.random() * 900000), text: 'Milk' },
    { id: Math.floor(100000 + Math.random() * 900000), text: 'Milk' },
    { id: Math.floor(100000 + Math.random() * 900000), text: 'Apple' }
  ])

  const Item = ({ item }) => {
    return (
      <TouchableOpacity style={style.listItem}>
        <View style={style.listItemView}>
          <Text style={style.listItemText}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Header title="Shopping list" />
      <FlatList
        data={items}
        renderItem={({ item }) => <Item item={item.text} />}
      />
    </View>
  )
}




export default App