import {combineReducers} from 'redux';
import reducer from './reducer';
import drawReducer from './holddrawreducer';

const rootReducer = combineReducers({
    // bettingBarReducer: bettingBarReducer,
    drawReducer: drawReducer,
    reducer: reducer,
});


export default rootReducer;