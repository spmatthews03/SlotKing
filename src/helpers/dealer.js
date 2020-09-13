import { 
    CARDS,
    BAR, SEVEN, TRIPLE_SEVEN, CROWN, COIN, CHERRY, JACKPOT, DOUBLE_BAR, DOUBLE_HEART, HEART, BONUS, WILD } from '../constants/cards';
import { BAR_CARD, DOUBLE_BAR_CARD, HEART_CARD, DOUBLE_HEART_CARD,
   SEVEN_CARD, TRIPLE_SEVEN_CARD, CROWN_CARD, CHERRY_CARD, BLUE_CARD, COIN_CARD,
  JACKPOT_CARD, BONUS_CARD, WILD_CARD } from '../constants/imageConstants';

  
  export const shuffle = (a) => {
    const b = [...a];
    let j, x, i;
    for (i = b.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = b[i];
        b[i] = b[j];
        b[j] = x;
    }
    return b;
  }
  
  export const symbol = (name) => SYMBOLS[name] || name;

  export const getNewCard = (deck) => {
      card = deck[0];
      if(card == BAR){
        return BAR;
      } else if(card == DOUBLE_BAR){
        return DOUBLE_BAR;
      } else if(card == HEART){
        return HEART;
      } else if(card == DOUBLE_HEART){
        return DOUBLE_HEART;
      } else if(card == CHERRY){
        return CHERRY;
      } else if(card == COIN){
        return COIN;
      } else if(card == CROWN){
        return CROWN;
      } else if(card == JACKPOT){
        return JACKPOT;
      } else if(card == SEVEN){
        return SEVEN;
      } else if(card == TRIPLE_SEVEN){
        return TRIPLE_SEVEN;
      } else if(card == BONUS){
        return BONUS;
      } else if(card == WILD){
        return WILD;
      }
  }

  export const getCards = (a) => {

    let newCards = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,  
    };
    for(i=1; i <=9; i++){
      let card = a[i];
      if(card == BAR){
        newCards[i] = BAR;
      } else if(card == DOUBLE_BAR){
        newCards[i] = DOUBLE_BAR;
      } else if(card == HEART){
        newCards[i] = HEART;
      } else if(card == DOUBLE_HEART){
        newCards[i] = DOUBLE_HEART;
      } else if(card == CHERRY){
        newCards[i] = CHERRY;
      } else if(card == COIN){
        newCards[i] = COIN;
      } else if(card == CROWN){
        newCards[i] = CROWN;
      } else if(card == JACKPOT){
        newCards[i] = JACKPOT;
      } else if(card == SEVEN){
        newCards[i] = SEVEN;
      } else if(card == TRIPLE_SEVEN){
        newCards[i] = TRIPLE_SEVEN;
      } else if(card == BONUS){
        newCards[i] = BONUS;
      } else if(card == WILD){
        newCards[i] = WILD;
      }
    }
    return newCards;
  }


  export const getCardImage = (card) => {
    if(card == BAR){
      return BAR_CARD;
    } else if(card == DOUBLE_BAR){
      return DOUBLE_BAR_CARD;
    } else if(card == HEART){
      return HEART_CARD;
    } else if(card == DOUBLE_HEART){
      return DOUBLE_HEART_CARD;
    } else if(card == CHERRY){
      return CHERRY_CARD;
    } else if(card == COIN){
      return COIN_CARD;
    } else if(card == CROWN){
      return CROWN_CARD;
    } else if(card == JACKPOT){
      return JACKPOT_CARD;
    } else if(card == SEVEN){
      return SEVEN_CARD;
    } else if(card == TRIPLE_SEVEN){
      return TRIPLE_SEVEN_CARD;
    } else if(card == BONUS){
      return BONUS_CARD;
    } else if(card == WILD){
      return WILD_CARD;
    }else {
      return BLUE_CARD;
    }
  }