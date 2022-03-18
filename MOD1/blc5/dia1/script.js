/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

document.getElementsByTagName("p")[0].innerText = "Funfa...".toUpperCase();
document.getElementsByTagName("p")[1].innerText = "Funfa?".toUpperCase();
document.getElementsByTagName("p")[2].innerText = "Funfa!".toUpperCase();

document.getElementsByClassName("main-content")[0].style.backgroundColor =
  "rgb(76,164,109)";

document.getElementsByClassName("center-content")[0].style.backgroundColor =
  "white";

document.getElementById("titulo").innerText = "Exercício 5.1 - JavaScript";

for (let i in document.getElementsByTagName("p")) {
  console.log(document.getElementsByTagName("p")[i].innerText);
}
