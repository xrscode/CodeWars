"strict";
function basicOp(operation, value1, value2) {
  //console.log(operation);
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
  // Code
}

//Test 1
console.log(basicOp("+", 4, 7)); //Should equal 11

//Test 2
console.log(basicOp("-", 15, 18)); //Should equal -3

//Test 3
console.log(basicOp("*", 5, 5)); //Should equal 25

//Test 4
console.log(basicOp("/", 49, 7)); //Should equal 7
