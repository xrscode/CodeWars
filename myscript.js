"strict";
function DNAStrand(dna) {
  //your code here
  let arr = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      arr.push("T");
    } else if (dna[i] === "T") {
      arr.push("A");
    } else if (dna[i] === "G") {
      arr.push("C");
    } else if (dna[i] === "C") {
      arr.push("G");
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}

//Test
DNAStrand("AAAA");
DNAStrand("CGAT");
