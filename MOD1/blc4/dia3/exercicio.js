console.log("---------------- FATORIAL ----------------");

let fatorial = 10;
let resultado = fatorial;

for (let i = 1; i < fatorial; i++) {
  resultado *= i;
}

console.log(resultado);

console.log("---------------- INVERSOR ----------------");

let word = "Trybe";
let wordBack = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordBack = wordBack + word[i];
}
console.log(wordBack);

console.log("-------------- MAIOR E MENOR -------------");

let array = ["java", "javascript", "python", "html", "css"];
let countHigh = 0;
let arrayHighPosition = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i].length > countHigh) {
    countHigh = array[i].length;
    arrayHighPosition = i;
  }
}

console.log("A maior palavra do array é: " + array[arrayHighPosition]);

let countLow = array[0].length;
let arrayLowPosition = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i].length < countLow) {
    countLow = array[i].length;
    arrayLowPosition = i;
  }
}

console.log("A menor palavra do array é: " + array[arrayLowPosition]);

console.log("-------------- MAIOR Nº PRIMO ------------");

