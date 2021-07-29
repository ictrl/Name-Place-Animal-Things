const Interval = prompt("Interval in second");
const aplhas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const generateNewAlpha = () => {
  let randomNumber = Math.random();

  randomNumber = randomNumber * 26;

  randomNumber = Math.floor(randomNumber);

  const alpha = aplhas[randomNumber];
  console.log("alpha: ", alpha);

  document.getElementById("alpha").innerHTML = alpha;
};

setInterval(() => {
  generateNewAlpha();
}, Interval * 1000);
