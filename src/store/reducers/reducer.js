import { ADD_BET, REPEAT_BET, RESET_BET, DEAL, HIGHLIGHT_CHIP } from "../actions/actions";

const initialState = {
    credit: 1000,
    highlighted_chip: 0,
    total_bet: 0,
    jackpot: 100,
    jackpotDisable: false,
    bets:{
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
    },
    previous_bets: null,
    cards: {
      card1: require('../../assets/images/canvas/card_holder.png'),
      card2: require('../../assets/images/canvas/card_holder.png'),
      card3: require('../../assets/images/canvas/card_holder.png'),
      card4: require('../../assets/images/canvas/card_holder.png'),
      card5: require('../../assets/images/canvas/card_holder.png'),
      card6: require('../../assets/images/canvas/card_holder.png'),
      card7: require('../../assets/images/canvas/card_holder.png'),
      card8: require('../../assets/images/canvas/card_holder.png'),
      card9: require('../../assets/images/canvas/card_holder.png'),
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DEAL:
            return{
                ...state,
            };
        case RESET_BET:
            return{
                ...state,
            };
        case REPEAT_BET:
            return{
                ...state,
            };
        case ADD_BET:
            let newBets = state.bets;
            newBets[action.payload] = state.bets[action.payload] + state.highlighted_chip
            return{
                ...state,
                bets: newBets
            };
        case HIGHLIGHT_CHIP:
            return{
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;