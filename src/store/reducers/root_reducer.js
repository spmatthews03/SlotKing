import {combineReducers} from 'redux';
import reducer from './reducer';
import drawReducer from './drawreducer';
import drawReducerBig from './drawreducerbig';
import versionReducer from './versionReducer';

const rootReducer = combineReducers({
    // bettingBarReducer: bettingBarReducer,
    versionReducer: versionReducer,
    drawReducerBig: drawReducerBig,
    drawReducer: drawReducer,
    reducer: reducer,
});


export default rootReducer;