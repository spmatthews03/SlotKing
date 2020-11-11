import { payouts, payoutsBig } from "./payouts";




export const stoppedBigCalculator = (bet, cards) => {
    let line1 = [1,2,3,4];
    let line2 = [5,6,7,8];
    let line3 = [9,10,11,12];
    let line4 = [13,14,15,16];
    let line5 = [13,9,5,1];
    let line6 = [14,10,6,2];
    let line7 = [15,11,7,3];
    let line8 = [16,12,8,4];
    let line9 = [4,3,2,1];
    let line10 = [8,7,6,5];
    let line11 = [12,11,10,9];
    let line12 = [16,15,14,13];
    let line13 = [1,5,9,13];
    let line14 = [2,6,10,14];
    let line15 = [3,7,11,15];
    let line16 = [4,8,12,16];
    let line17 = [1,6,11,16];
    let line18 = [16,11,6,1];
    let line19 = [4,7,10,13];
    let line20 = [13,10,7,4];

    let lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20]

    let total_winnings = 0;
    let winning_lines = [];

    lines.forEach(line => {
        let one = cards[line[0]];
        let two = cards[line[1]];
        let three = cards[line[2]];
        let four = cards[line[3]];
        if(one === two || one === "WILD" || two === "WILD") {
            if(three === one || three === two || three === "WILD"){
                if(four === three || four === two || four === one || four === "WILD"){
                    if(one !== "WILD")
                        total_winnings = total_winnings + bet * payoutsBig["4x" + one];
                    else
                        total_winnings = total_winnings + bet * payoutsBig["4x" + two];
                    winning_lines.push(line);
                }
                else{
                    if(one !== "WILD")
                        total_winnings = total_winnings + bet * payoutsBig["3x" + one]
                    else
                        total_winnings = total_winnings + bet * payoutsBig["3x" + two]
                    line.pop();
                    winning_lines.push(line);
                }
            }
        }
    })
    return {winnings: total_winnings, winning_lines: winning_lines};
}

export const stoppedCalculator = (bet, cards) => {
    let line1 = [1,2,3];
    let line2 = [4,5,6];
    let line3 = [7,8,9];
    let line4 = [7,5,3];
    let line5 = [7,4,1];
    let line6 = [8,5,2];
    let line7 = [9,6,3];
    let line8 = [9,5,1];
    let line9 = [9,8,7];
    let line10 = [6,5,4];
    let line11 = [3,2,1];
    let line12 = [3,5,7];
    let line13 = [3,6,9];
    let line14 = [2,5,8];
    let line15 = [1,4,7];
    let line16 = [1,5,9];

    let lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16]

    let total_winnings = 0;
    let winning_lines = [];

    lines.forEach(line => {
        if(cards[line[0]] === cards[line[1]]){
            if(cards[line[1]] === cards[line[2]]){
                total_winnings = total_winnings + bet * payouts["3x" + cards[line[0]]];
                winning_lines.push(line);
            }
            else{
                total_winnings = total_winnings + bet * payouts["2x" + cards[line[0]]];
                line.pop();
                winning_lines.push(line);
            }
        }
    })
    return {winnings: total_winnings, winning_lines: winning_lines};
}

export const calculateTotalBet = (gameChips) => {
    let total = 0;
    let chips = gameChips;
    for(let i = 0; i < Object.keys(chips).length; i++){
        let chip = Object.keys(chips)[i]
        if(chips[chip])
            total = total + parseInt(chip);
    }
    return total;
}
