"strict";
function lovefunc(flower1, flower2) {
  // moment of truth
  let flower1Even = Number.isInteger(flower1 / 2);
  let flower2Even = Number.isInteger(flower2 / 2);
  console.log(
    `Flower 1 is even; ${flower1Even} Flower 2 is even; ${flower2Even}`
  );
  if (flower1Even === flower2Even) {
    return false;
  } else {
    return true;
  }
}

lovefunc(1, 2);
