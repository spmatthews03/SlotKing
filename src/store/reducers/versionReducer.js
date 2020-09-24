import {
    SET_VERSION, 
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD,
    BET,
    SET_GAME
} from "../../constants/actionTypes";

const initialState = {
    version: null,
    credit: 5000,
    unlocked: false,
}


const versionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VERSION:
            return {
                ...state,
                version: action.version
            }
        case HOLD_DRAW_ADD_WINNINGS:
            if(!state.unlocked && state.credit > 10000){
                return {
                    ...state,
                    credit: state.credit + action.payload,
                    unlocked: true
                }
            } else {
                return {
                    ...state,
                    credit: state.credit + action.payload,
                }
            }
        case BET:
            return {
                ...state,
                credit: state.credit - action.payload
            }
        case NEED_AD:
            return {
                ...state,
                adReady: action.payload
            }
        // case SOUND:
        //     return {
        //         ...state,
        //         soundOn: !action.payload
        //     }
        default:
            return state;
    }
};

export default versionReducer;