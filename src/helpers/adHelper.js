
// const FOUR_HOURS = 60 * 60 * 1000 * 4;
const FOUR_HOURS = 1 * 60 * 1000;

export const isLastClaimLongerThanFourHours = (lastClaim) => {
    let now_ms = new Date().getTime();
    let then_ms = new Date(lastClaim).getTime();
    if((now_ms - then_ms)> FOUR_HOURS)
        return true;
    else
        return false;
}
