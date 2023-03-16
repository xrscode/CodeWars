"strict";

function sumArray(array) {
  let sum = 0;

  if (Array.isArray(array) && array.length > 2 && !array.some(isNaN)) {
    array.sort(function (a, b) {
      return a - b;
    });

    for (let i = 1; i < array.length - 1; i++) {
      sum = sum + array[i];
    }
  } else {
    sum = 0;
  }
  console.log(`The sum of array number is ${sum}`);
  return sum;
}

//Array Testing
let test1 = []; //Should equal 0
let test2 = [null]; //Should equal 0
let test3 = [5, 3, "hat"]; //should equal 0
let test4 = [1, 2]; // Should equal 0
let test5 = [null, 5, 1]; //Should return 1
let test6 = [6, 2, 1, 8, 10]; //Should return 16
let test7 = []; // should return 0

//console.log(array(test2))
sumArray(test1);
sumArray(test2);
sumArray(test3);
sumArray(test4);
sumArray(test5);
sumArray(test6);
sumArray(test7);
