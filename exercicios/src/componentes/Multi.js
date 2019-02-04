import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

const Inverter = props => {
  const inv = props.texto.split('').reverse().join('')
  return <Text style={Padrao.ex}>{inv}</Text>
}

const MegaSena = props => {
  const min = 1, max = 60
  const numeros = Array(props.numeros || 6).fill(0)
  for (i = 0; i < numeros.length; i++) {
    let novo = 0;
    while (numeros.includes(novo)) {
      novo = Math.floor(Math.random() * (max - min + 1)) + min
    }
    numeros[i] = novo
  }
  numeros.sort((a, b) => a - b) //ordena crescente os números
  return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>;
}

export { Inverter, MegaSena }