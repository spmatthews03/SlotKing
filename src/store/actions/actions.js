export const ADD_BET = 'ADD_BET';
export const RESET_BET = 'RESET_BET';
export const DEAL = 'DEAL';
export const REPEAT_BET = 'REPEAT_BET';
export const SET_OPACITIES = 'SET_OPACITIES';
export const BET_ALL = 'BET_ALL';
export const BETTING = 'BETTING';
export const FLIP = 'FLIP';
export const SET_GAME = 'SET_GAME';
export const DISCARD = 'DISCARD';
export const DEAL_NEW = 'DEAL_NEW';
export const DEALING = 'DEALING';
export const DONE_DISCARDING = 'DONE_DISCARDING';
export const DONE_FLIPPING = 'DONE_FLIPPING';

export const flippingComplete = () => {
    return {
        type: DONE_FLIPPING
    }
}

export const discardingComplete = () => {
    return {
        type: DONE_DISCARDING
    }
}

export const dealNewCard = (num) => {
    return {
        type: DEAL_NEW,
        card: num
    }
}

export const discard = (cards) => {
    return {
        type: DISCARD,
        cards: cards
    }
}

export const dealFaceDown = (num) => {
    return {
        type: DEALING,
        card: num
    }
}

export const flip = (bet) => {
    return {
        type: FLIP,
        payload: bet
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

export const setOpacities = (opacities) => {
    return{
        type: SET_OPACITIES,
        payload: opacities
    }
}