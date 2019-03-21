import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigator from './src/Navigator';
import storeConfig from './src/store/storeConfig.js';

import axios from 'axios'
axios.defaults.baseURL = 'https://lambe-df1e8.firebaseio.com/'

const store = storeConfig()
const Redux = () => {
    return (
        <Provider store={store}>
            <Navigator></Navigator>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
