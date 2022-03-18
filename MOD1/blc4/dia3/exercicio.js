console.log("-------------------------------- FATORIAL");

let fatorial = 10;
let resultado = fatorial;

for (let i = 1; i < fatorial; i++) {
  resultado *= i;
}

console.log('Fatorial de ' + fatorial + ' é ' + resultado);

console.log("-------------------------------- INVERSOR");

let word = "Trybe";
let wordBack = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordBack = wordBack + word[i];
}
console.log(word + ' ao contrário é ' + wordBack);

console.log("-------------------------------- MAIOR E MENOR");

// Algorítimo que diz qual a maior palavra do array.

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

// Algorítimo que diz qual a menor palavra do array.

let countLow = array[0].length;
let arrayLowPosition = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i].length < countLow) {
    countLow = array[i].length;
    arrayLowPosition = i;
  }
}

console.log("A menor palavra do array é: " + array[arrayLowPosition]);

console.log("-------------------------------- MAIOR Nº PRIMO");

