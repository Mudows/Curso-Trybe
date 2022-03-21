// Crie um irmão para elementoOndeVoceEsta.
document.getElementById("pai").appendChild(document.createElement("section"));

// Crie um filho para elementoOndeVoceEsta.
document
  .getElementById("elementoOndeVoceEsta")
  .appendChild(document.createElement("section"));

// Crie um filho para primeiroFilhoDoFilho.
document
  .getElementById("primeiroFilhoDoFilho")
  .appendChild(document.createElement("section"));

// A partir desse filho criado, acesse terceiroFilho.
//document.getElementById('primeiroFilhoDoFilho').lastElementChild
