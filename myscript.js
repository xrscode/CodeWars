function bouncingBall(h, bounce, window) {
  // your code here
  let n = 0;
  if (bounce < 1 && h > 0) {
    while (h > window) {
      h = h * bounce;
      console.log(`${n} ${h}`);
      n++;
    }
  } else {
    return -1;
  }

  console.log(n);
  return n + 1;
}

bouncingBall(30, 0.66, 1.5);
