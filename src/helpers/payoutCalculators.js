import { payouts } from "./payouts";

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


export const jackpotCalculator = () => {

}

export const stoppedCalculator = (bet, cards) => {
    var total_winnings = 0;

    lines.forEach(line => {
        if(cards[line[0]] == cards[line[1]]){
            if(cards[line[1]] == cards[line[2]]){
                total_winnings = total_winnings + bet * payouts["3x" + cards[line[0]]];
            }
            else{
                total_winnings = total_winnings + bet * payouts["2x" + cards[line[0]]]
            }
        }
    })
    return total_winnings;
}