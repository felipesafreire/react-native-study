import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
  Contador: {
    screen: () => <Contador numero={8}></Contador>
  },
  MegaSena: {
    screen: () => <MegaSena numeros={8}></MegaSena>,
    navigationOptions: { title: 'Mega Senha' }
  },
  Inverter: {
    screen: () => <Inverter texto="Felipe"></Inverter>
  },
  ParImpar: {
    screen: () => <ParImpar numero={30}></ParImpar>
  },
  Simples: {
    screen: () => <Simples texto="Flexivel!!"></Simples>
  }
}, { drawerWidth: 300 })