const readline = require('readline-sync');

const question1 = readline.question('Qual o seu nome? ')
const question2 = readline.questionInt('Qual a sua idade? ')

const faixaEtaria = question2 < 18 ? "Tu é dimenó, parça!" : "Tu é dimaió, parça!"

console.log(`Ei, ${question1}! Você tem ${question2} de idade. ${faixaEtaria}`)
