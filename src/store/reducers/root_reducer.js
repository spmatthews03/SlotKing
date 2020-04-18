import {createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducer';
import bettingBarReducer from './bettingBarReducer';
import { composeWithDevTools } from 'remote-redux-devtools';

const rootReducer = combineReducers({
    // bettingBarReducer: bettingBarReducer,
    reducer: reducer,
});

let composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'SlotKing',
    hostname: 'localhost',
    port: 8000, // the port your remotedev server is running at
  });

const configStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(),
        );
};

export default configStore;