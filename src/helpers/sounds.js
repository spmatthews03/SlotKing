

const Sound = require('react-native-sound');
Sound.setCategory('Playback');

// CARD DEAL SOUND
export const cardDeal = new Sound('card_deal.mp3', Sound.MAIN_BUNDLE, (error) => {
  if(error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + cardDeal.getDuration() + ' number of channels: ' + cardDeal.getNumberOfChannels());
});


// CARD SELECT
export const cardSelect = new Sound('button_click.mp3', Sound.MAIN_BUNDLE, (error) => {
  if(error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + cardDeal.getDuration() + ' number of channels: ' + cardDeal.getNumberOfChannels());
});


// BUTTON SELECT SOUND
export const buttonClick = new Sound('mouse_click.mp3', Sound.MAIN_BUNDLE, (error) => {
    if(error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + cardDeal.getDuration() + ' number of channels: ' + cardDeal.getNumberOfChannels());
  });

  // PEN CLICK
export const penClick = new Sound('pen_on.mp3', Sound.MAIN_BUNDLE, (error) => {
    if(error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + cardDeal.getDuration() + ' number of channels: ' + cardDeal.getNumberOfChannels());
  });

    // COIN THUD
export const coinThud = new Sound('coin_set.mp3', Sound.MAIN_BUNDLE, (error) => {
    if(error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + cardDeal.getDuration() + ' number of channels: ' + cardDeal.getNumberOfChannels());
  });

      // WIN MORE THAN BET
export const win = new Sound('coins_thud2.mp3', Sound.MAIN_BUNDLE, (error) => {
    if(error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + cardDeal.getDuration() + ' number of channels: ' + cardDeal.getNumberOfChannels());
  });
