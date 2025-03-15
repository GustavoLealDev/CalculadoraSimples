import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import{Colors} from '@/Utils/Colors'

const Button = ({title, type, onPress}: {title: string, type: 'top' | 'right' | 'number'; onPress: Function}) => {
  return (
    <TouchableOpacity style={[styles.button, 
      {
      backgroundColor: 
      type == 'top' 
      ? Colors.btnDark 
      : type == 'right' 
      ? Colors.btnRight 
      : Colors.btnRight,
      }
    ]} onPress={onPress}>
        <Text style={{fontSize: 34, color: type == 'number' ? Colors.white : Colors.white}}>{title}</Text>
     </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
button:{
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.btnDark
  }
})