"strict";
function isTriangle(a, b, c) {
  //(a, b, c).sort();
  let arr = [a, b, c];
  //console.log(a, b, c);
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr[0] + arr[1] > arr[2] && arr[0] >= 1) {
    console.log(`true`);
    return true;
  } else {
    console.log(`false`);
    return false;
  }
}

//test
isTriangle(1, 2, 3); //true
isTriangle(7, 2, 2); //false
