export const ADD_BET = 'ADD_BET';
export const RESET_BET = 'RESET_BET';
export const DEAL = 'DEAL';
export const REPEAT_BET = 'REPEAT_BET';
export const HIGHLIGHT_CHIP = 'HIGHLIGHT_CHIP';
export const SET_OPACITIES = 'SET_OPACITIES';
export const BET_ALL = 'BET_ALL';
export const DEALING = 'DEALING';
export const FLIPPING = 'FLIPPING';
export const BETTING = 'BETTING';
export const FLIP = 'FLIP';
export const CLEAR = 'CLEAR';


export const dealFaceDown = (num) => {
    return {
        type: DEALING,
        card: num
    }
}

export const flipCards = (num) => {
    return {
        type: FLIPPING,
        card:num
    }
}

export const flip = () => {
    return {
        type: FLIP,
    }
}

export const clearCards = () => {
    return {
        type: CLEAR,
    }
}

export const betting = () => {
    return {
        type: BETTING,
    }
}

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

export const betAll = () => {
    return{
        type: BET_ALL
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