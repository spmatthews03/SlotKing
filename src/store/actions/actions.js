export const ADD_BET = 'ADD_BET';
export const RESET_BET = 'RESET_BET';
export const DEAL = 'DEAL';
export const REPEAT_BET = 'REPEAT_BET';
export const HIGHLIGHT_CHIP = 'HIGHLIGHT_CHIP';



export const addBet = (data) => {
    return{
        type: ADD_BET,
        payload: data
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

export const highlightChip = () => {
    return{
        type: HIGHLIGHT_CHIP
    }
}