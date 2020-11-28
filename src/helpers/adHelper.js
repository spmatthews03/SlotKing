
// const FOUR_HOURS = 60 * 1000;
const FOUR_HOURS = 4 * 60 * 60 * 1000;

export const isLastClaimLongerThanFourHours = (lastClaim) => {
    let now_ms = new Date().getTime();
    let then_ms = new Date(lastClaim).getTime();
    return (now_ms - then_ms) > FOUR_HOURS;
}
