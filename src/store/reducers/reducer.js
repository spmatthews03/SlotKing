import { 
    ADD_BET,
    REPEAT_BET, 
    RESET_BET, 
    DEAL, 
    HIGHLIGHT_CHIP, 
    SET_OPACITIES, 
    BET_ALL, 
    DEALING, 
    FLIPPING,
    BETTING,
    FLIP, 
    CLEAR} from "../actions/actions";
import { JACKPOT_DEALER_CARDS } from "../../../constants/cards";
import { shuffle, getCards } from "../../../helpers/dealer";


const initialState = {
    gameStarted: false,
    dealing: false,
    flipping: false,
    betting: false,
    credit: 1000,
    highlighted_chip: 1,
    total_bet: 0,
    jackpot: 100,
    jackpotDisable: false,
    opacities: {
        yellow: 1,
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
    },
    unflipped_cards: {},
    flipped_cards: []
}





const reducer = (state = initialState, action) => {

    calcTotalBet = (bets) => {
        let sum = 0;
        for(i =1; i<= Object.keys(bets).length; i++){
            sum = sum + bets[i];
        }
        return sum;
    }

    dealCards = () => {
        cards = getCards(shuffle(JACKPOT_DEALER_CARDS));
        return cards;
    }


    switch(action.type) {
        case DEALING:
            return{
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]:require('../../assets/images/cards/card_back_blue.png'),
                },
                dealing: true,
                betting: true
            };
        case FLIPPING:
            return{
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]: state.unflipped_cards[action.card],
                },
            }
        case FLIP:
            dealtCards = dealCards()

            return{
                ...state,
                flipping: true,
                dealing: false,
                betting: false,
                unflipped_cards: dealtCards,
                cards: dealtCards
            }
        case BETTING:
            return{
                ...state,
                dealing: false,
                betting: true
            }
        // case CLEAR:
        //     return{
        //         ...state,
        //         cards: {
        //             ...state.cards,
        //             [action.card]:require('../../assets/images/cards/card_back_blue.png'),
        //         }
        //     }
        case DEAL:
            let temp = {
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
            return{
                ...state,
                previous_bets: {...state.bets},
                bets: temp,
                credit: state.credit + calcTotalBet(state.bets),
                // cards: {
                //         ...state.cards,
                //         [action.card]:require('../../assets/images/cards/card_back_blue.png'),
                //     },
                total_bet: 0,
                betting: true,
                dealing: true,
                flipping: false,
            };
        case RESET_BET:
            let temp2 = {
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
            return{
                ...state,
                bets: temp2,
                total_bet: 0
            };
        case REPEAT_BET:
            return{
                ...state,
                bets: state.previous_bets,
                total_bet: calcTotalBet(state.previous_bets)
            };
        case ADD_BET:
            return{
                ...state,
                bets: {
                    ...state.bets,
                    [action.betNum]: state.bets[action.betNum] + state.highlighted_chip
                },
                total_bet: state.total_bet + state.highlighted_chip
            };
        case BET_ALL:
            let betAll = {
                "1": state.bets[1] + state.highlighted_chip,
                "2": state.bets[2] + state.highlighted_chip,
                "3": state.bets[3] + state.highlighted_chip,
                "4": state.bets[4] + state.highlighted_chip,
                "5": state.bets[5] + state.highlighted_chip,
                "6": state.bets[6] + state.highlighted_chip,
                "7": state.bets[7] + state.highlighted_chip,
                "8": state.bets[8] + state.highlighted_chip,
                "9": state.bets[9] + state.highlighted_chip,
                "10": state.bets[10] + state.highlighted_chip,
                "11": state.bets[11] + state.highlighted_chip,
                "12": state.bets[12] + state.highlighted_chip,
                "13": state.bets[13] + state.highlighted_chip,
                "14": state.bets[14] + state.highlighted_chip,
                "15": state.bets[15] + state.highlighted_chip,
                "16": state.bets[16] + state.highlighted_chip,   
            };
            return {
                ...state,
                bets: betAll,
                total_bet: calcTotalBet(betAll)
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