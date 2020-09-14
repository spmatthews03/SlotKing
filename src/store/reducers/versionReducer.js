import {
    SET_VERSION, 
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD,
    BET
} from "../../constants/actionTypes";

const initialState = {
    version: null,
    credit: 500
}


const versionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VERSION:
            return {
                ...state,
                version: action.version
            }
        case HOLD_DRAW_ADD_WINNINGS:
            return {
                ...state,
                credit: state.credit + action.payload
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
        default:
            return state;
    }
};

export default versionReducer;