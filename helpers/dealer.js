import { 
    CARDS,
    NUM_BAR,
    NUM_CHERRY,
    NUM_COIN,
    NUM_CROWN,
    NUM_DOUBLE_BAR,
    NUM_DOUBLE_HEART,
    NUM_HEART,
    NUM_JACKPOT,
    NUM_SEVEN,
    NUM_TRIPLE_SEVEN,
    NUM_WILD } from '../constants/cards';
  
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
