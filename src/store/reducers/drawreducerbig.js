import {
    TOGGLE_BET_BIG,
    DONE_DISCARDING_BIG,
    DONE_FLIPPING_BIG,
    DISCARD_BIG,
    DEALING_BIG,
    FLIP_BIG,
    DEAL_NEW_BIG,
    DEAL_BIG, SET_WINNINGS_LINES_BIG
} from "../../constants/actionTypes";
import {
    BLUE_CARD,
    CARD_HOLDER } from '../../constants/imageConstants';
   import { HOLD_AND_DRAW_BIG_DECK } from "../../constants/cards";
import { shuffle, getCards, getNewCard } from "../../helpers/dealer";
import {gameStates} from "../../constants/gameStates";

const initialState = {
    gameState: gameStates.NEW_GAME,
    deck: null,
    chips:{
        "20": false,
        "40": false,
        "60": false,
        "80": false
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
        "10": CARD_HOLDER,
        "11": CARD_HOLDER,
        "12": CARD_HOLDER,
        "13": CARD_HOLDER,
        "14": CARD_HOLDER,
        "15": CARD_HOLDER,
        "16": CARD_HOLDER,
      },
    adReady: false,
    winningLines: []
}


const drawReducerBig = (state = initialState, action) => {

    dealCards = () => {
        return getCards(state.deck, 16);
    }

    switch(action.type) {
        case DEAL_NEW_BIG:
            state.deck.splice(0,1);
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]: getNewCard(state.deck)
                },
                deck: state.deck
            }
        case DONE_DISCARDING_BIG:
            return {
                ...state,
                gameState: gameStates.RESULTS
            }
        case DONE_FLIPPING_BIG:
            return {
                ...state,
                gameState: gameStates.WAIT_ON_DISCARD
            }
        case DISCARD_BIG:
            return{
                ...state,
                gameState: gameStates.DISCARDING
            }
        case DEALING_BIG:
            return{
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]:BLUE_CARD,
                },
            };
        case FLIP_BIG:
            dealtCards = dealCards();
            state.deck.splice(0,16);
            return{
                ...state,
                gameState: gameStates.FLIPPING,
                cards: dealtCards,
                deck: state.deck,
            }
        case DEAL_BIG:
            return{
                ...state,
                cards: {
                        ...initialState.cards,
                    },
                deck: shuffle(HOLD_AND_DRAW_BIG_DECK),
                gameState: gameStates.BETTING,
            };
        case TOGGLE_BET_BIG:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: !state.chips[action.payload]
                },
            }
        case SET_WINNINGS_LINES_BIG:
            return {
                ...state,
                winningLines: action.winningLines
            }
        default:
            return state;
    }
};

export default drawReducerBig;
