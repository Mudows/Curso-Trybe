let kdTu = document.getElementById("elementoOndeVoceEsta");

// Acesse o elemento elementoOndeVoceEsta.
console.log(kdTu);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
kdTu.parentElement.style.backgroundColor = "pink";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//kdTu.parentElement.innerText = "clanDestino para sempre.";

// Acesse o primeiroFilho a partir de pai .
//console.log(document.getElementById("pai").firstChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
//console.log(kdTu.nextSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
//console.log(kdTu.parentElement.innerText)

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
//kdTu.nextElementSibling

// Agora acesse o terceiroFilho a partir de pai.
//document.getElementById('pai').lastElementChild.previousElementSibling