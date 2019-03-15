import React from 'react'
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';

const loginOrProfifeRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
},{
    initialRouteName: "Profile"
})

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor}></Icon>
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Addd Foto',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='camera' size={30} color={tintColor}></Icon>
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfifeRouter,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor}></Icon>
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig));

export default MenuNavigator;