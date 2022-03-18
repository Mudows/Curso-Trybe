let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let dados = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

console.log("Bem-vinda,", info.personagem);

console.log("---------------------------------------------------------");

info["recorrente"] = "sim";

console.log(info);

console.log("---------------------------------------------------------");

for (let i in info) {
  console.log(i);
}

console.log("---------------------------------------------------------");

for (let i in info) {
  console.log(info[i]);
}

console.log("---------------------------------------------------------");

for (let i in info) {
  console.log(info[i], "e", dados[i]);
}

console.log("---------------------------------------------------------");

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de",
  leitor.nome,
  leitor.sobrenome,
  "se chama",
  leitor.livrosFavoritos[0].titulo
);

console.log("---------------------------------------------------------");

