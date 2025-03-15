import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/Utils/Colors'
import Button from './Button'

const Calculadora = () => {
  const [firstValue, setFirstValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');

  const NumberInput = (num: string) => {
    if (displayValue == '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  }

  const OperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  }

  const Calculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue( (num1 + num2).toString() );
    } else if (operator === '-') {
      setDisplayValue( (num1 - num2).toString() );
    } else if (operator === '*') {
      setDisplayValue( (num1 * num2).toString() );
    } else if (operator === '/') {
      setDisplayValue( (num1 / num2).toString() );
    } else if (operator === '%') {
      setDisplayValue( (num1 % num2).toString() );
    }

    setOperator('');
    setFirstValue('');
  }

  const Clear = () => {
    setDisplayValue('0');
    setOperator('');
    setFirstValue('');
  }

  const Delete = () => {
    if (displayValue.length == 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{ fontSize: 30, fontWeight: '300' }}>{firstValue + operator}</Text>
        <Text style={{ fontSize: 70, fontWeight: '300' }}>{displayValue}</Text>
      </View>
      <View style={styles.keypad}>
        <Button title='C' type='top' onPress={Clear} />
        <Button title='⌫' type='top' onPress={Delete} />
        <Button title='%' type='top' onPress={() => OperatorInput('%')} />
        <Button title='÷' type='right' onPress={() => OperatorInput('/')} />
        <Button title='7' type='number' onPress={() => NumberInput('7')} />
        <Button title='8' type='number' onPress={() => NumberInput('8')} />
        <Button title='9' type='number' onPress={() => NumberInput('9')} />
        <Button title='x' type='right' onPress={() => OperatorInput('*')} />
        <Button title='6' type='number' onPress={() => NumberInput('6')} />
        <Button title='5' type='number' onPress={() => NumberInput('5')} />
        <Button title='4' type='number' onPress={() => NumberInput('4')} />
        <Button title='-' type='right' onPress={() => OperatorInput('-')} />
        <Button title='1' type='number' onPress={() => NumberInput('1')} />
        <Button title='2' type='number' onPress={() => NumberInput('2')} />
        <Button title='3' type='number' onPress={() => NumberInput('3')} />
        <Button title='+' type='right' onPress={() => OperatorInput('+')} />
        <Button title='0' type='number' onPress={() => NumberInput('0')} />
        <Button title='00' type='number' onPress={() => NumberInput('00')} />
        <Button title='.' type='number' onPress={() => NumberInput('.')} />
        <Button title='=' type='right' onPress={Calculation} />
      </View>
    </View>
  )
}

export default Calculadora

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    flex: 1,
    backgroundColor: Colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  keypad: {
    flex: 2,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    padding: 30
  }
})