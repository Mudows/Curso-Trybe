const nota = 81;
let estatus = "foi?";

if (nota >= 80) {
  console.log("Parabéns, você foi aprovado(a)!");
} else if (nota >= 60 && nota < 80) {
  console.log("Vocês está na nossa lista de espera.");
} else {
  console.log("Você foi reprovado(a).");
}

switch (nota) {
  case nota >= 80:
    estatus = "Aprovada";
    console.log(estatus);
    break;

  case nota >= 60 && nota < 80:
    estatus = "Lista";
    console.log(estatus);
    break;

  default:
    estatus = "Reprovada";
    console.log(estatus);
}
