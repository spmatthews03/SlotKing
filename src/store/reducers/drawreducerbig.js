import {
    TOGGLE_BET_BIG,
    TOGGLE_BET_OFF_BIG,
    NEED_AD_BIG,
    SET_VERSION_BIG,
    DONE_DISCARDING_BIG,
    DONE_FLIPPING_BIG,
    DISCARD_BIG,
    DEALING_BIG,
    FLIP_BIG,
    BETTING_BIG,
    HIGHLIGHT_CHIP_BIG,
    SET_GAME_BIG,
    DEAL_NEW_BIG,
    DEAL_BIG
} from "../../constants/actionTypes";
import {
    BLUE_CARD, 
    CARD_HOLDER } from '../../constants/imageConstants';
   import { HOLD_AND_DRAW_BIG_DECK } from "../../constants/cards";
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
        "10": CARD_HOLDER,
        "11": CARD_HOLDER,
        "12": CARD_HOLDER,
        "13": CARD_HOLDER,
        "14": CARD_HOLDER,
        "15": CARD_HOLDER,
        "16": CARD_HOLDER,
      },
    adReady: false
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
                gameState:  state.game == gameModes.STOPPED ? gameStates.FLIPPING : gameStates.RESULTS,
                cards: dealtCards,
                deck: state.deck,
            }
        case BETTING_BIG:
            return{
                ...state,
                gameState: gameStates.BETTING
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
        case TOGGLE_BET_OFF_BIG:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: false
                },
            }
        case HIGHLIGHT_CHIP_BIG:
            return{
                ...state,
                highlighted_chip: action.payload
            };
        case SET_GAME_BIG:
            return {
                ...state,
                game: action.game
            }
        case NEED_AD_BIG:
            return {
                ...state,
                adReady: action.payload
            }
        case SET_VERSION_BIG:
            return {
                ...state,
                version: action.version
            }
        default:
            return state;
    }
};

export default drawReducerBig;