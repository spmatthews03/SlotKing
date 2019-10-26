/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configStore from './src/store/reducers/root_reducer';
import devToolsEnhancer from 'remote-redux-devtools';

const store = configStore();

const SlotKing = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => SlotKing);
