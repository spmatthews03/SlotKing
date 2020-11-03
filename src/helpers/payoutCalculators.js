import { payouts, payoutsBig } from "./payouts";
import { WILD } from './cards';
import {win} from "./sounds";




export const stoppedBigCalculator = (bet, cards) => {
    line1 = [1,2,3,4];
    line2 = [5,6,7,8];
    line3 = [9,10,11,12];
    line4 = [13,14,15,16];
    line5 = [13,9,5,1];
    line6 = [14,10,6,2];
    line7 = [15,11,7,3];
    line8 = [16,12,8,4];
    line9 = [4,3,2,1];
    line10 = [8,7,6,5];
    line11 = [12,11,10,9];
    line12 = [16,15,14,13];
    line13 = [1,5,9,13];
    line14 = [2,6,10,14];
    line15 = [3,7,11,15];
    line16 = [4,8,12,16];
    line17 = [1,6,11,16];
    line18 = [16,11,6,1];
    line19 = [4,7,10,13];
    line20 = [13,10,7,4];

    lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20]

    let total_winnings = 0;
    let winning_lines = [];

    lines.forEach(line => {
        var one = cards[line[0]];
        var two = cards[line[1]];
        var three = cards[line[2]];
        var four = cards[line[3]];
        if(one == two || one == "WILD" || two == "WILD") {
            if(three == one || three == two || three == "WILD"){
                if(four == three || four == two || four == one || four == "WILD"){
                    if(one != "WILD")
                        total_winnings = total_winnings + bet * payoutsBig["4x" + one];
                    else
                        total_winnings = total_winnings + bet * payoutsBig["4x" + two];
                    winning_lines.push(line);
                }
                else{
                    if(one != "WILD")
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
    line1 = [1,2,3];
    line2 = [4,5,6];
    line3 = [7,8,9];
    line4 = [7,5,3];
    line5 = [7,4,1];
    line6 = [8,5,2];
    line7 = [9,6,3];
    line8 = [9,5,1];
    line9 = [9,8,7];
    line10 = [6,5,4];
    line11 = [3,2,1];
    line12 = [3,5,7];
    line13 = [3,6,9];
    line14 = [2,5,8];
    line15 = [1,4,7];
    line16 = [1,5,9];

    lines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16]

    let total_winnings = 0;
    let winning_lines = [];

    lines.forEach(line => {
        if(cards[line[0]] == cards[line[1]]){
            if(cards[line[1]] == cards[line[2]]){
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
