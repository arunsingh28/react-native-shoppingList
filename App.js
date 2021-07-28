import React from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import Header from './components/Header'
import style from './components/style/index'
import Icon from 'react-native-vector-icons/dist/FontAwesome'



const App = () => {

  const [text, setText] = useState('')
  console.log('intial:', text)
  const [items, setItems] = useState([
    // { id: Math.floor(100000 + Math.random() * 900000), text: 'Milk' },
    // { id: Math.floor(100000 + Math.random() * 900000), text: 'Egg' },
    // { id: Math.floor(100000 + Math.random() * 900000), text: 'Butter' },
    // { id: Math.floor(100000 + Math.random() * 900000), text: 'Apple' }
  ])

  const deleteItem = (id) => {
    console.log('item id:', id)
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id)
    })
  }

  const addItem = ({ text }) => {
    console.log(text)
    setItems(prevItem => {
      return [
        {
          id: Math.floor(10000 + Math.random() * 9000),
          text
        }
        , ...prevItem]
    })
  }

  const Item = ({ item, id }) => {
    return (
      <TouchableOpacity style={style.listItem}>
        <View style={style.listItemView}>
          <Text style={style.listItemText}>{item}</Text>
          <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(id)} />
        </View>
      </TouchableOpacity>
    )
  }

  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
        editable
        maxLength={40}
      />
    )
  }

  const AddItem = () => {
    return (
      <View>
        {/* <TextInput
          placeholder="Add Item.."
          style={style.input}
          value={text}
          onChangeText={t => setText(t)}
        /> */}
        <UselessTextInput
          onChangeText={t => onChangeText(t)}
          value={text}
        />
        <TouchableOpacity style={style.btn} onPress={() => addItem(text)}>
          <Text style={style.btnText}>
            <Icon name="plus" />
            Add Item</Text>
        </TouchableOpacity>
      </View>
    )
  }


  // main function 
  return (
    <View>
      <Header title="Shopping list" />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({ item }) => <Item item={item.text} id={item.id} />}
      />
    </View>
  )
}






export default App