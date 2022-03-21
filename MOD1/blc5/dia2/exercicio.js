////////////////////////////////////// PRIMEIRO REQUISITO
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

document
  .getElementsByTagName("body")[0]
  .appendChild(document.createElement("h1"));

document.getElementsByTagName("h1")[0].innerText =
  "Exercício 5.2 - JavaScript DOM";

//Bônus 1
document.getElementsByTagName("h1")[0].className += "title";

////////////////////////////////////// SEGUNDO REQUISITO
// Adicione a tag main com a classe main-content como filho da tag body ;

document
  .getElementsByTagName("body")[0]
  .appendChild(document.createElement("main"));

document.getElementsByTagName("main")[0].className += "main-content";

////////////////////////////////////// TERCEIRO REQUISITO
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let mainSection = document.getElementsByClassName("main-content")[0];

mainSection.appendChild(document.createElement("section"));
mainSection.firstChild.className += "center-content";

////////////////////////////////////// QUARTO REQUISITO
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let centerContent = document.getElementsByClassName("center-content")[0];

centerContent.appendChild(document.createElement("p"));
centerContent.firstChild.innerText =
  "Satani, Satani, in amus dignita. Satani, Satani, e vade retro sagitta";

////////////////////////////////////// QUINTO REQUISITO
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

mainSection.appendChild(document.createElement("section"));
mainSection.children[1].className += "left-content";
mainSection.children[1].id = "img";

////////////////////////////////////// SEXTO REQUISITO
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

mainSection.appendChild(document.createElement("section"));
mainSection.lastChild.className += "right-content";
mainSection.lastChild.id = "sectionLista";

////////////////////////////////////// SÉTIMO REQUISITO
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

document.getElementById("img").innerHTML =
  '<img src="https://picsum.photos/200" class="small-image">';

////////////////////////////////////// OITAVO REQUISITO
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let secaoDaLista = document.getElementById("sectionLista");

secaoDaLista.appendChild(document.createElement("ul"));
secaoDaLista.firstChild.id = "listaUl";

for (let i = 0; i < 10; i += 1) {
  document.getElementById("listaUl").appendChild(document.createElement("li"));
  document.getElementById("listaUl").children[i].innerText = i + 1;
}

////////////////////////////////////// NONO REQUISITO - FINAL
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 0; i < 3; i += 1) {
  mainSection.appendChild(document.createElement("h3"));
  //Bônus 2
  mainSection.getElementsByTagName("h3")[i].className += "description";
}
