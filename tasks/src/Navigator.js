import React from 'react'
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import Agenda from './screens/Agenda';
import Auth from './screens/Auth';
import commonStyles from './commonStyles';
import Menu from './components/Menu';
import AuthOrApp from './screens/AuthOrApp';

const MenuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <Agenda title="Hoje" daysAhead={0} {...props}></Agenda>,
        navigationOptions: {
            title: "Hoje"
        }
    },
    Tommorow: {
        name: 'Tommorow',
        screen: props => <Agenda title="Amanhã" daysAhead={1} {...props}></Agenda>,
        navigationOptions: {
            title: "Amanhã"
        }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda title="Semana" daysAhead={7} {...props}></Agenda>,
        navigationOptions: {
            title: "Semana"
        }
    },
    Month: {
        name: 'Month',
        screen: props => <Agenda title="Mês" daysAhead={30} {...props}></Agenda>,
        navigationOptions: {
            title: "Mês"
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle:{
            color: '#080'
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Loading: {
        name: 'Loading',
        screen: AuthOrApp
    },
    Auth: {
        name: 'Auth',
        screen: Auth,
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    },
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Loading'
})

const App = createAppContainer(MainNavigator);

export default App