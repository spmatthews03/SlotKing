import {
    TOGGLE_BET_SMALL,
    TOGGLE_BET_OFF_SMALL,
    NEED_AD_SMALL,
    SET_VERSION_SMALL,
    DEAL_SMALL, 
    DEALING_SMALL,
    DEAL_NEW_SMALL,
    HIGHLIGHT_CHIP_SMALL, 
    BETTING_SMALL,
    SET_GAME_SMALL,
    DISCARD_SMALL,
    FLIP_SMALL,
    DONE_DISCARDING_SMALL,
    DONE_FLIPPING_SMALL
} from "../../constants/actionTypes";
import {
    BLUE_CARD, 
    CARD_HOLDER } from '../../constants/imageConstants';
   import { HOLD_AND_DRAW_DECK } from "../../constants/cards";
import { shuffle, getCards, getNewCard } from "../../helpers/dealer";
import {gameStates,gameModes} from "../../constants/gameStates";
import { allowableChips } from "../../helpers/chips";

const initialState = {
    game: null,
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
    adReady: false
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
                gameState:  state.game == gameModes.STOPPED ? gameStates.FLIPPING : gameStates.RESULTS,
                cards: dealtCards,
                deck: state.deck,
            }
        case BETTING_SMALL:
            return{
                ...state,
                gameState: gameStates.BETTING
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
        case TOGGLE_BET_OFF_SMALL:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: false
                },
            }
        case HIGHLIGHT_CHIP_SMALL:
            return{
                ...state,
                highlighted_chip: action.payload
            };
        case SET_GAME_SMALL:
            return {
                ...state,
                game: action.game
            }
        case NEED_AD_SMALL:
            return {
                ...state,
                adReady: action.payload
            }
        case SET_VERSION_SMALL:
            return {
                ...state,
                version: action.version
            }
        default:
            return state;
    }
};

export default drawReducer;