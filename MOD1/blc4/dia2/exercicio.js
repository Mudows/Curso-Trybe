let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSum = 0;
let m20 = "Default";
let maiorNum = 0;
let menorNum = numbers[0];
let numImpar = 0;

for (let i of numbers) {
  console.log(i);
}

for (let i = 0; i < numbers.length; i += 1) {
  numbersSum = numbersSum + numbers[i];
}

let media = numbersSum / numbers.length;

if (media > 20) {
  m20 = "Valor maior que 20.";
} else {
  m20 = "valor menor ou igual a 20.";
}

console.log("---------- < SOMA DOS VALORES > ----------");
console.log(numbersSum);
console.log("---------- < MEDIA ARITMÉTICA > ----------");
console.log(media);
console.log(m20);

console.log("---------- < MAIOR  VAL ARRAY > ----------");
for (let a = 0; a < numbers.length; a += 1) {
  if (maiorNum < numbers[a]) {
    maiorNum = numbers[a];
  }
}
console.log(maiorNum);

console.log("---------- < VALORES  ÍMPARES > ----------");

for (let a = 0; a < numbers.length; a += 1) {
  if (numbers[a] % 2 > 0) {
    numImpar += 1;
  }
}
if (numImpar === 0) {
    console.log('Nenhum valor ímpar encontrado.');
} else {
    console.log(numImpar);
}

console.log("---------- < MENOR  VAL ARRAY > ----------");

for (let a = 0; a < numbers.length; a += 1) {
  if (menorNum > numbers[a]) {
    menorNum = numbers[a];
  }
}
console.log(menorNum);

console.log("---------- < ARRAY  DE 1 A 25 > ----------");

let novoArray = [];

for (let a = 1; a < 26; a += 1) {
    novoArray.push(a);
}
console.log(novoArray);

console.log("---------- < ARRAY NV DIVIDIDO > ----------");

for (let a = 0; a < novoArray.length; a += 1) {
    console.log(novoArray[a] / 2);
}