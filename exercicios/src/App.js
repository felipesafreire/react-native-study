import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Flexível!!"></Simples>
        <ParImpar numero={21} />
        <Inverter texto='React Native'></Inverter>
        <MegaSena numeros={9}></MegaSena>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})