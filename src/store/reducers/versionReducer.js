import {
    SET_VERSION,
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD,
    BET,
    SET_GAME,
    RULES_3X3,
    RULES_4X4
} from "../../constants/actionTypes";

const initialState = {
    version: null,
    credit: 5000,
    unlocked: false,
    rules_3x3_shown: false,
    rules_4x4_shown: false
}


const versionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VERSION:
            return {
                ...state,
                version: action.version
            }
        case HOLD_DRAW_ADD_WINNINGS:
            let totalCredit = state.credit + action.payload;
            if(!state.unlocked && totalCredit > 9600){
                return {
                    ...state,
                    credit: totalCredit,
                    unlocked: true
                }
            } else {
                return {
                    ...state,
                    credit: totalCredit,
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
        case RULES_3X3:
            return {
                ...state,
                rules_3x3_shown: true
            }
        case RULES_4X4:
            return {
                ...state,
                rules_4x4_shown: true
            }
        default:
            return state;
    }
};

export default versionReducer;
