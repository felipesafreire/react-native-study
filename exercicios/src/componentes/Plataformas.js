import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default pops => {
  const notificar = msg => {
    if (Platform.OS === 'android') {
      //Alert.alert("Informação", msg)
      ToastAndroid.show(msg, ToastAndroid.LONG)
    } else {
      Alert.alert("Informação", msg)
    }
	
	console.log('Test debug console.');
	
  }

  return <Button title="Plataforma" onPress={() => notificar('Parabéns!')}></Button>

}