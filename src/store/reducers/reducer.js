import { ADD_BET, REPEAT_BET, RESET_BET, DEAL, HIGHLIGHT_CHIP, SET_OPACITIES } from "../actions/actions";
import { JACKPOT_DEALER_CARDS } from "../../../constants/cards";
import { shuffle, getCards } from "../../../helpers/dealer";


const initialState = {
    credit: 1000,
    highlighted_chip: 0,
    total_bet: 0,
    jackpot: 100,
    jackpotDisable: false,
    opacities: {
        yellow: 0.2,
        purple: 0.2,
        green: 0.2,
        red: 0.2,
        gold: 0.2
    },
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
      "1": require('../../assets/images/canvas/card_holder.png'),
      "2": require('../../assets/images/canvas/card_holder.png'),
      "3": require('../../assets/images/canvas/card_holder.png'),
      "4": require('../../assets/images/canvas/card_holder.png'),
      "5": require('../../assets/images/canvas/card_holder.png'),
      "6": require('../../assets/images/canvas/card_holder.png'),
      "7": require('../../assets/images/canvas/card_holder.png'),
      "8": require('../../assets/images/canvas/card_holder.png'),
      "9": require('../../assets/images/canvas/card_holder.png'),
    }
}


const clearBets = {
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
};


const reducer = (state = initialState, action) => {

    calcTotalBet = (bets) => {
        let sum = 0;
        for(i =1; i<= Object.keys(bets).length; i++){
            sum = sum + bets[i];
        }
        return sum;
    }

    dealCards = () => {
        // let shuffledDeck = shuffle(JACKPOT_DEALER_CARDS)
        // newCards2 = getCards(shuffle(JACKPOT_DEALER_CARDS));


        newCards = {
            "1": require('../../assets/images/cards/card_bonus.png'),
            "2": require('../../assets/images/cards/card_heart.png'),
            "3": require('../../assets/images/cards/card_jackpot.png'),
            "4": require('../../assets/images/cards/card_cherry.png'),
            "5": require('../../assets/images/cards/card_bar.png'),
            "6": require('../../assets/images/cards/card_coin.png'),
            "7": require('../../assets/images/cards/card_coin.png'),
            "8": require('../../assets/images/cards/card_wild.png'),
            "9": require('../../assets/images/cards/card_crown.png'),
          }
        return newCards;
    }


    switch(action.type) {
        case DEAL:
            let prev_bets = state.bets;
            dealtCards = dealCards()
            return{
                ...state,
                previous_bets: prev_bets,
                bets: clearBets,
                credit: state.credit + calcTotalBet(state.bets),
                cards: dealtCards,
                total_bet: 0
            };
        case RESET_BET:
            return{
                ...state,
                bets: clearBets,
                total_bet: 0
            };
        case REPEAT_BET:
            return{
                ...state,
                bets: state.previous_bets,
                total_bet: calcTotalBet(state.previous_bets)
            };
        case ADD_BET:
            let newBets3 = state.bets;
            newBets3[action.betNum] = state.bets[action.betNum] + state.highlighted_chip
            return{
                ...state,
                bets: newBets3,
                total_bet: state.total_bet + state.highlighted_chip
            };
        case HIGHLIGHT_CHIP:
            return{
                ...state,
                highlighted_chip: action.payload
            };
        case SET_OPACITIES:
            return{
                ...state,
                opacities: action.payload
            }
        default:
            return state;
    }
};

export default reducer;