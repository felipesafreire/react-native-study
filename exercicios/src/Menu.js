import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta';

export default createDrawerNavigator({
  Avo: {
    screen: () => <Avo nome='João' sobrenome='Silva'></Avo>
  },
  Evento: {
    screen: Evento
  },
  ValidarProps: {
    screen: () => <ValidarProps ano='18'></ValidarProps>
  },
  Plataformas: {
    screen: Plataformas
  },
  Contador: {
    screen: () => <Contador numeroInicial={100}></Contador>
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