import {createStore, combineReducers, compose } from 'redux';
import reducer from './reducer';
import devToolsEnhancer from 'remote-redux-devtools';

const rootReducer = combineReducers({
    reducer: reducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const configStore = () => {
    return createStore(
        rootReducer,
        reducer.initialState,
        devToolsEnhancer(),
        );
};

export default configStore;