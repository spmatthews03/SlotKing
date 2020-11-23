import {
    SET_VERSION,
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD,
    BET,
    RULES_3X3,
    RULES_4X4,
    CLAIM_CHIPS,
    SET_CLAIM_CHIP_TIME,
    SET_ROOM
} from "../../constants/actionTypes";

const initialState = {
    version: null,
    credit: 5000,
    unlocked: false,
    rules_3x3_shown: false,
    rules_4x4_shown: false,
    claimChips: false,
    claimChipsTime: new Date(),
    room: null
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
        case CLAIM_CHIPS:
            return {
                ...state,
                claimChips: action.claim
            }
        case SET_CLAIM_CHIP_TIME:
            return {
                ...state,
                claimChipsTime: new Date()
            }
        case SET_ROOM:
            return {
                ...state,
                room: action.payload
            }
        default:
            return state;
    }
};

export default versionReducer;
