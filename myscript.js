"strict";
function getMiddle(s) {
  let arr = s.length;
  let eve0 = 0;
  let eve1 = 0;
  let odd1 = 0;

  if (arr <= 2) {
    //console.log(`The array length only has ${arr} positions.`)
    return s[0];
  } else if (Number.isInteger(arr / 2)) {
    eve1 = arr / 2;
    eve0 = arr / 2 - 1;
    console.log(`${s[eve0]} and ${s[eve1]}`);
    console.log(`${s[eve0]}${s[eve1]}`);
    //console.log(`Array lengh (${arr}) is even, middle position; ${eve1} & ${eve0}.  The elements at this position are; ${(s[eve0])} and ${(s[eve1])}.`);
    return `${s[eve0]}${s[eve1]}`;
  } else {
    odd1 = Math.floor(arr / 2);
    //console.log(`Array length (${arr}) is odd, middle position; ${odd1}`);
    return s[odd1];
  }
}
