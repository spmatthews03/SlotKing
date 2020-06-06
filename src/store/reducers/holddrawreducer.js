import { 
    DEAL, 
    DEALING,
    DEAL_NEW,
    HIGHLIGHT_CHIP, 
    BETTING,
    SET_GAME,
    DISCARD,
    FLIP,
    DONE_DISCARDING,
    DONE_FLIPPING} from "../actions/actions";
import {
    TOGGLE_BET,
    HOLD_DRAW_ADD_WINNINGS
    // FLIP
} from "../../../constants/actionTypes";
import { JACKPOT_DEALER_CARDS } from "../../../constants/cards";
import { shuffle, getCards, getNewCard } from "../../../helpers/dealer";
import {gameStates,gameModes} from "../../../constants/gameStates";

const initialState = {
    game: null,
    gameState: gameStates.NEW_GAME,
    credit: 1000,
    deck: null,
    chips:{
        "16": false,
        "32": false,
        "48": false,
        "64": false
    },
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


const drawReducer = (state = initialState, action) => {

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
                deck: state.deck.splice(9),
                credit: state.credit - action.payload
            }
        case BETTING:
            return{
                ...state,
                gameState: gameStates.BETTING
            }
        case HOLD_DRAW_ADD_WINNINGS:
            return{
                ...state,
                credit: state.credit + action.payload
            }
        case DEAL:
            return{
                ...state,
                cards: {
                        ...initialState.cards,
                    },
                deck: shuffle(JACKPOT_DEALER_CARDS),
                gameState: gameStates.BETTING
            };
        case TOGGLE_BET:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: !state.chips[action.payload]
                },
            }
        case HIGHLIGHT_CHIP:
            return{
                ...state,
                highlighted_chip: action.payload
            };
        case SET_GAME:
            return {
                ...state,
                game: action.game
            }
        default:
            return state;
    }
};

export default drawReducer;