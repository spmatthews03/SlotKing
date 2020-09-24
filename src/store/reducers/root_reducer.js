import {combineReducers} from 'redux';
import reducer from './reducer';
import drawReducer from './drawreducer';
import drawReducerBig from './drawreducerbig';
import versionReducer from './versionReducer';
import drawReducerHI from './drawreducerHI'
import drawReducerBigHI from './drawreducerbigHI'

const rootReducer = combineReducers({
    versionReducer: versionReducer,
    drawReducerBig: drawReducerBig,
    drawReducerHI: drawReducerHI,
    drawReducerBigHI: drawReducerBigHI,
    drawReducer: drawReducer,
    reducer: reducer,
});


export default rootReducer;