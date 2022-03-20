// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
let avo = document.getElementById('paiDoPai');
let pai = document.getElementById('pai');

pai.removeChild(pai.firstElementChild);
pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.lastElementChild);

document.getElementById('elementoOndeVoceEsta').removeChild(document.getElementById('elementoOndeVoceEsta').lastElementChild)