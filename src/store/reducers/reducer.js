import { 
    ADD_BET,
    REPEAT_BET, 
    RESET_BET, 
    DEAL, 
    DEALING,
    DEAL_NEW,
    HIGHLIGHT_CHIP, 
    SET_OPACITIES, 
    BET_ALL, 
    BETTING,
    FLIP, 
    SET_GAME,
    DISCARD,
    DONE_DISCARDING,
    DONE_FLIPPING} from "../actions/actions";
import { JACKPOT_DEALER_CARDS } from "../../../constants/cards";
import { shuffle, getCards, getNewCard } from "../../../helpers/dealer";
import {gameStates,gameModes} from "../../../constants/gameStates";

const initialState = {
    game: null,
    gameState: gameStates.NEW_GAME,
    credit: 1000,
    highlighted_chip: 1,
    total_bet: 0,
    jackpot: 100,
    jackpotDisable: false,
    deck: null,
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
        cards = getCards(state.deck);
        return cards;
    }


    switch(action.type) {
        case DEAL_NEW:
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]: getNewCard(state.deck)
                },
                deck: state.deck.splice(1)
            }
        case DONE_DISCARDING:
            return {
                ...state,
                gameState: gameStates.RESULTS
            }
        case DONE_FLIPPING:
            return {
                ...state,
                gameState: gameStates.WAIT_ON_DISCARD
            }
        case DISCARD:
            return{
                ...state,
                gameState: gameStates.DISCARDING
            }
        case DEALING:
            return{
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]:require('../../assets/images/cards/card_back_blue.png'),
                },
            };
        case FLIP:
            dealtCards = dealCards()
            return{
                ...state,
                gameState:  state.game == gameModes.STOPPED ? gameStates.FLIPPING : gameStates.RESULTS,
                cards: dealtCards,
                deck: state.deck.splice(9)
            }
        case BETTING:
            return{
                ...state,
                gameState: gameStates.BETTING
            }
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
                cards: {
                        ...initialState.cards,
                    },
                deck: shuffle(JACKPOT_DEALER_CARDS),
                total_bet: 0,
                gameState: gameStates.BETTING
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
        case SET_GAME:
            return {
                ...state,
                game: action.game
            }
        default:
            return state;
    }
};

export default reducer;