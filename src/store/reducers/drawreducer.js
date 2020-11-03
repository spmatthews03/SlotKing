import {
    TOGGLE_BET_SMALL,
    DEAL_SMALL,
    DEALING_SMALL,
    DEAL_NEW_SMALL,
    DISCARD_SMALL,
    FLIP_SMALL,
    DONE_DISCARDING_SMALL,
    DONE_FLIPPING_SMALL,
    SET_WINNINGS_LINES_SMALL
} from "../../constants/actionTypes";
import {
    BLUE_CARD,
    CARD_HOLDER } from '../../constants/imageConstants';
   import { HOLD_AND_DRAW_DECK } from "../../constants/cards";
import { shuffle, getCards, getNewCard } from "../../helpers/dealer";
import {gameStates} from "../../constants/gameStates";

const initialState = {
    gameState: gameStates.NEW_GAME,
    deck: null,
    chips:{
        "16": false,
        "32": false,
        "48": false,
        "64": false
    },
    cards: {
      "1": CARD_HOLDER,
      "2": CARD_HOLDER,
      "3": CARD_HOLDER,
      "4": CARD_HOLDER,
      "5": CARD_HOLDER,
      "6": CARD_HOLDER,
      "7": CARD_HOLDER,
      "8": CARD_HOLDER,
      "9": CARD_HOLDER,
    },
    adReady: false,
    winningLines: []
}


const drawReducer = (state = initialState, action) => {

    dealCards = () => {
        return getCards(state.deck, 9);
    }

    switch(action.type) {
        case DEAL_NEW_SMALL:
            state.deck.splice(0,1);
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]: getNewCard(state.deck)
                },
                deck: state.deck
            }
        case DONE_DISCARDING_SMALL:
            return {
                ...state,
                gameState: gameStates.RESULTS
            }
        case DONE_FLIPPING_SMALL:
            return {
                ...state,
                gameState: gameStates.WAIT_ON_DISCARD
            }
        case DISCARD_SMALL:
            return{
                ...state,
                gameState: gameStates.DISCARDING
            }
        case DEALING_SMALL:
            return{
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]:BLUE_CARD,
                },
            };
        case FLIP_SMALL:
            dealtCards = dealCards();
            state.deck.splice(0,9);
            return{
                ...state,
                gameState: gameStates.FLIPPING,
                cards: dealtCards,
                deck: state.deck,
            }
        case DEAL_SMALL:
            return{
                ...state,
                cards: {
                        ...initialState.cards,
                    },
                deck: shuffle(HOLD_AND_DRAW_DECK),
                gameState: gameStates.BETTING,
            };
        case TOGGLE_BET_SMALL:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: !state.chips[action.payload]
                },
            }
        case SET_WINNINGS_LINES_SMALL:
            return {
                ...state,
                winningLines: action.winningLines
            }
        default:
            return state;
    }
};

export default drawReducer;
