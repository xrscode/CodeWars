function copyList(l) {
  //your code here
  let arr = [];
  console.log(`L is ${l}`);
  console.log(`L is an array? ${Array.isArray(l)}`);
  if (Array.isArray(l)) {
    for (let i = 0; i < l.length; i++) {
      arr.push(l[i]);
    }
  } else {
    console.log("undefined");
    return undefined;
  }
  console.log(`arr is: ${arr}`);
}

//copyList([1, 2, 3, 4]);
copyList(1, 2, 3, 4);
copyList([1, 29, 31, 90, 55, 88, 61, 20, 79, 30]);
