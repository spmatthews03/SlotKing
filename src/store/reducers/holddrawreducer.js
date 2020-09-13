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
    TOGGLE_BET_OFF,
    NEED_AD,
    HOLD_DRAW_ADD_WINNINGS
} from "../../constants/actionTypes";
import {
    BLUE_CARD, 
    CARD_HOLDER } from '../../constants/imageConstants';
   import { JACKPOT_DEALER_CARDS } from "../../constants/cards";
import { shuffle, getCards, getNewCard } from "../../helpers/dealer";
import {gameStates,gameModes} from "../../constants/gameStates";
import { allowableChips } from "../../helpers/chips";

const initialState = {
    game: null,
    gameState: gameStates.NEW_GAME,
    credit: 300,
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
        cards = getCards(state.deck);
        return cards;
    }

    switch(action.type) {
        case DEAL_NEW:
            state.deck.splice(0,1);
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.card]: getNewCard(state.deck)
                },
                deck: state.deck
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
                    [action.card]:BLUE_CARD,
                },
            };
        case FLIP:
            dealtCards = dealCards();
            state.deck.splice(0,9);
            return{
                ...state,
                gameState:  state.game == gameModes.STOPPED ? gameStates.FLIPPING : gameStates.RESULTS,
                cards: dealtCards,
                deck: state.deck,
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
            // var chips;
            // if(credit < 160)
            //     chips = allowableChips(credit, state.chips);
            // else
            //     chips = state.chips;
            return{
                ...state,
                cards: {
                        ...initialState.cards,
                    },
                deck: shuffle(JACKPOT_DEALER_CARDS),
                gameState: gameStates.BETTING,
                // chips: chips
            };
        case TOGGLE_BET:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: !state.chips[action.payload]
                },
            }
        case TOGGLE_BET_OFF:
            return{
                ...state,
                chips: {
                    ...state.chips,
                    [action.payload]: false
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
        case NEED_AD:
            return {
                ...state,
                adReady: action.payload
            }
        default:
            return state;
    }
};

export default drawReducer;