"strict";
//Logic to test if Array and array is populated.
let array = function (arr) {
  let sum = 0;
  if (Array.isArray(arr) && arr.length > 0 && !arr.some(isNaN)) {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  } else {
    sum = 0;
  }
  console.log(sum);
}; //END FUNCTION

//Array Testing
let test1 = []; //Should equal 0
let test2 = [null]; //Should equal 0
let test3 = [5, 3, "hat"]; //should equal 0
let test4 = [1, 2]; // Should equal 3
let test5 = [null, 5, 1]; //Should equal 6
let test6 = //Should equal 0
  //console.log(array(test2))
  array(test1);
array(test2);
array(test3);
array(test4);
array(test5);
array(test6);
