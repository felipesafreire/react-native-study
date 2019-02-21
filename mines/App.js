import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando com o Mines!</Text>
        <Text style={styles.instructions}> Tamanho da grade:
          {params.getRowsAmount()}x{params.getCollumnsAmount()}
        </Text>
        <Field />
        <Field opened nearMines={1}></Field>
        <Field opened nearMines={2}></Field>
        <Field opened nearMines={3}></Field>
        <Field opened nearMines={6}></Field>
        <Field mined></Field>
        <Field mined opened></Field>
        <Field mined opened exploded></Field>
        <Field flagged></Field>
        <Field flagged opened></Field>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
