function isValidWalk(walk) {
  //insert brilliant code here
  let ns = 0;
  let sw = 0;
  console.log(walk.length);
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      ns = ns + 1;
    } else if (walk[i] === "s") {
      ns = ns - 1;
    } else if (walk[i] === "e") {
      sw = sw + 1;
    } else if (walk[i] === "w") {
      sw = sw - 1;
    }
  }
  return walk.length === 10 && ns === 0 && sw === 0
    ? console.log("true")
    : console.log("false");
}

// isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]); //Should Return True

// isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]); //False

// isValidWalk(["w"]);

// isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]);

isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
