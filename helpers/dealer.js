import { 
    CARDS,
    BAR, SEVEN, TRIPLE_SEVEN, CROWN, COIN, CHERRY, JACKPOT, DOUBLE_BAR, DOUBLE_HEART, HEART, BONUS } from '../constants/cards';
  

  
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

  export const getCards = (a) => {
    // let cards = [];
    // for(i=1; i <=9; i++){
    //   let card = a[i];
    //   if(card == BAR){
    //     cards.push(require("../src/assets/images/cards/card_bar.png"));
    //   } else if(card == DOUBLE_BAR){
    //     cards.push(require("../src/assets/images/cards/card_double_bar.png"));
    //   } else if(card == HEART){
    //     cards.push(require("../src/assets/images/cards/card_heart.png"));
    //   } else if(card == DOUBLE_HEART){
    //     cards.push(require("../src/assets/images/cards/card_double_heart.png"));
    //   } else if(card == CHERRY){
    //     cards.push(require("../src/assets/images/cards/card_cherry.png"));
    //   } else if(card == COIN){
    //     cards.push(require("../src/assets/images/cards/card_coin.png"));
    //   } else if(card == CROWN){
    //     cards.push(require("../src/assets/images/cards/card_crown.png"));
    //   } else if(card == JACKPOT){
    //     cards.push(require("../src/assets/images/cards/card_jackpot.png"));
    //   } else if(card == SEVEN){
    //     cards.push(require("../src/assets/images/cards/card_seven.png"));
    //   } else if(card == TRIPLE_SEVEN){
    //     cards.push(require("../src/assets/images/cards/card_tripleseven.png"));
    //   } else if(card == BONUS){
    //     cards.push(require("../src/assets/images/cards/card_bonus.png"));
    //   } else {
    //     cards.push(require("../src/assets/images/cards/card_back_blue.png"));
    //   }
    // }


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
        newCards[i] = require("../src/assets/images/cards/card_bar.png");
      } else if(card == DOUBLE_BAR){
        newCards[i] = require("../src/assets/images/cards/card_double_bar.png");
      } else if(card == HEART){
        newCards[i] = require("../src/assets/images/cards/card_heart.png");
      } else if(card == DOUBLE_HEART){
        newCards[i] = require("../src/assets/images/cards/card_double_heart.png");
      } else if(card == CHERRY){
        newCards[i] = require("../src/assets/images/cards/card_cherry.png");
      } else if(card == COIN){
        newCards[i] = require("../src/assets/images/cards/card_coin.png");
      } else if(card == CROWN){
        newCards[i] = require("../src/assets/images/cards/card_crown.png");
      } else if(card == JACKPOT){
        newCards[i] = require("../src/assets/images/cards/card_jackpot.png");
      } else if(card == SEVEN){
        newCards[i] = require("../src/assets/images/cards/card_seven.png");
      } else if(card == TRIPLE_SEVEN){
        newCards[i] = require("../src/assets/images/cards/card_tripleseven.png");
      } else if(card == BONUS){
        newCards[i] = require("../src/assets/images/cards/card_bonus.png");
      } else {
        newCards[i] = require("../src/assets/images/cards/card_back_blue.png");
      }
    }
    

    return newCards;
  }

  // "1": require('../../assets/images/cards/card_bonus.png'),
  //           "2": require('../../assets/images/cards/card_heart.png'),
  //           "3": require('../../assets/images/cards/card_jackpot.png'),
  //           "4": require('../../assets/images/cards/card_cherry.png'),
  //           "5": require('../../assets/images/cards/card_bar.png'),
  //           "6": require('../../assets/images/cards/card_coin.png'),
  //           "7": require('../../assets/images/cards/card_coin.png'),
  //           "8": require('../../assets/images/cards/card_wild.png'),
  //           "9": require('../../assets/images/cards/card_crown.png'),