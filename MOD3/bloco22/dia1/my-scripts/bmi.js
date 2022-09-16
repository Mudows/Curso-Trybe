const readline = require('readline-sync')

console.log('Calculadora de IMC')
const weight = readline.questionFloat('Digite o peso: ')
const height = readline.questionFloat('Digite a altura em metros: ')
const imcValue = (weight / (height**2)).toFixed(1)

if(imcValue < 18.5) return console.log(imcValue, '- Abaixo do peso')
if(imcValue < 24.9) return console.log(imcValue, '- Peso normal')
if(imcValue < 29.9) return console.log(imcValue, '- Acima do peso')
if(imcValue < 34.9) return console.log(imcValue, '- Obesidade I')
if(imcValue < 39.9) return console.log(imcValue, '- Obesidade II')
if(imcValue >= 40) return console.log(imcValue, '- Obesidade III e IV')
