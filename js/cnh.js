function verificarIdade() {
  var nome = document.querySelector("input[name=nome]");
  var idade = document.querySelector("input[name=idade]");

  if (idade.value.length == 0) {
    alert("Idade é um campo obrigatório");
    return;
  }

  var idadeNum = parseInt(idade.value);

  if (idadeNum >= 18) {
    alert("Ok, você pode tirar sua CNH");
  } else if (idadeNum <= 4) {
    alert("Melhor vc tomar leite");
  } else {
    alert("Vc é menor de idade, melhor andar de bicicleta");
  }

  console.log(nome.value);
  console.log(typeof nome.value);
  console.log(idade.value);
  console.log(typeof idade.value); 
}
