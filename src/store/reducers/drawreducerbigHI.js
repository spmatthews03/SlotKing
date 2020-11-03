import {
    HI_TOGGLE_BET_BIG,
    HI_DONE_DISCARDING_BIG,
    HI_DONE_FLIPPING_BIG,
    HI_DISCARD_BIG,
    HI_DEALING_BIG,
    HI_FLIP_BIG,
    HI_DEAL_NEW_BIG,
    HI_DEAL_BIG,
    HI_SET_WINNINGS_LINES_BIG
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
        "200": false,
        "400": false,
        "600": false,
        "800": false
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


const drawReducerBigHI = (state = initialState, action) => {

    dealCards = () => {
        return getCards(state.deck, 16);
    }

    switch(action.type) {
        case HI_DEAL_NEW_BIG:
            state.deck.splice(0,1);
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]: getNewCard(state.deck)
                },
                deck: state.deck
            }
        case HI_DONE_DISCARDING_BIG:
            return {
                ...state,
                gameState: gameStates.RESULTS
            }
        case HI_DONE_FLIPPING_BIG:
            return {
                ...state,
                gameState: gameStates.WAIT_ON_DISCARD
            }
        case HI_DISCARD_BIG:
            return{
                ...state,
                gameState: gameStates.DISCARDING
            }
        case HI_DEALING_BIG:
            return{
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]:BLUE_CARD,
                },
            };
        case HI_FLIP_BIG:
            dealtCards = dealCards();
            state.deck.splice(0,16);
            return{
                ...state,
                gameState: gameStates.FLIPPING,
                cards: dealtCards,
                deck: state.deck,
            }
        case HI_DEAL_BIG:
            return{
                ...state,
                cards: {
                        ...initialState.cards,
                    },
                deck: shuffle(HOLD_AND_DRAW_BIG_DECK),
                gameState: gameStates.BETTING,
            };
        case HI_TOGGLE_BET_BIG:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: !state.chips[action.payload]
                },
            }
        case HI_SET_WINNINGS_LINES_BIG:
            return {
                ...state,
                winningLines: action.winningLines
            }
        default:
            return state;
    }
};

export default drawReducerBigHI;
