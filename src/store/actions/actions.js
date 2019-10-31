export const ADD_BET = 'ADD_BET';
export const RESET_BET = 'RESET_BET';
export const DEAL = 'DEAL';
export const REPEAT_BET = 'REPEAT_BET';
export const HIGHLIGHT_CHIP = 'HIGHLIGHT_CHIP';
export const SET_OPACITIES = 'SET_OPACITIES';



export const addBet = (num, chip) => {
    return{
        type: ADD_BET,
        betNum: num,
        chip: chip
    }
}

export const resetBet = () => {
    return{
        type: RESET_BET,
    }
}

export const deal = () => {
    return{
        type: DEAL
    }
}

export const repeatBet = () => {
    return{
        type: REPEAT_BET
    }
}

export const highlightChip = (chip) => {
    return{
        type: HIGHLIGHT_CHIP,
        payload: chip
    }
}

export const setOpacities = (opacities) => {
    return{
        type: SET_OPACITIES,
        payload: opacities
    }
}