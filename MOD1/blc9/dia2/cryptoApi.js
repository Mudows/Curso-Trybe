const cryptoURL = 'https://api.coincap.io/v2/assets?limit=10';

async function pegaCrypto() {
  const response = await fetch(cryptoURL);
  const data = await response.json();
  //console.log(data);
  return data;
}

function createList(moeda, simb, valDol) {
  const createLine = document.createElement('p');
  createLine.innerText = `${moeda} (${simb}): ${valDol}.`;
  document.getElementById('lista').appendChild(createLine);
}

window.onload = async () => {
  const moedas = await pegaCrypto();
  console.log(moedas);
  // document.getElementById('lista').textContent = moedas.data[1].id;
  moedas.data.forEach(element => {
    const coin = element.name;
    const symb = element.symbol;
    const dolVal = element.supply;
    createList(coin, symb, dolVal);
  });
};


