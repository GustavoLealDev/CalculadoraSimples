import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import{Colors} from '@/Utils/Colors'
import Button from './Button'

const Calculadora = () => {
  return (
    <View style={styles.container}>
      <View style={styles.display}>Display</View>
      <Text style={{fontSize: 70, fontWeight: '300'}}>805</Text>
      <View style={styles.keypad}>
        <Button title='C' />
        <Button title='⌫' />
        </View>
    </View>
  )
}

export default Calculadora

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    display:{
        flex: 1,
        backgroundColor: Colors.gray,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    keypad:{
        flex: 2,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        padding: 30
    }
})