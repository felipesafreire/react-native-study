import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigator from './src/Navigator';
import storeConfig from './src/store/storeConfig.js';

const store = storeConfig()
const Redux = () => {
    return (
        <Provider store={store}>
            <Navigator></Navigator>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Redux);
