// Cotações do dia 01/02/2023
var cotacaoDolar = 5.07;
var cotacaoEuro = 5.34;
var cotacaoLibra = 6.77;
var cotacaoPeso = 0.27;

// Valores das moedas pré-conversão
var valorDolar = 0.0;
var valorEuro = 0.0;
var valorLibras = 0.0;
var valorPeso = 0.0;

// Valor em Reais inserido pelo usuário no input
var valorReal = 0.0;

// FUNÇÃO PARA PEGAR O VALOR INSERIDO PELO USUÁRIO
function converter() {
  var getValorReal = document.getElementById("valorReal");
  var valorReal = getValorReal.value;
  console.log(valorReal);

  // CÁLCULOS PARA CONVERSÃO DOS VALORES
  var valorDolar = valorReal / cotacaoDolar;
  var valorEuro = valorReal / cotacaoEuro;
  var valorLibra = valorReal / cotacaoLibra;
  var valorPeso = valorReal / cotacaoPeso;

  // EXIBIÇÃO DOS VALORES NO HTML
  var elementoValorDolar = document.getElementById("setDolar");
  var setDolar = "Valor em Dólar: " + valorDolar.toFixed(2);
  elementoValorDolar.innerHTML = setDolar;

  var elementoValorEuro = document.getElementById("setEuro");
  var setEuro = "Valor em Euros: " + valorEuro.toFixed(2);
  elementoValorEuro.innerHTML = setEuro;

  var elementoValorLibra = document.getElementById("setLibra");
  var setLibra = "Valor em Libras: " + valorLibra.toFixed(2);
  elementoValorLibra.innerHTML = setLibra;

  var elementoValorPeso = document.getElementById("setPeso");
  var setPeso = "Valor em Pesos: " + valorPeso.toFixed(2);
  elementoValorPeso.innerHTML = setPeso;

  // EXIBIÇÃO DOS VALORES EM ALERT
  //   alert("Valor em Dólar: US$" + valorDolar.toFixed(2));
  //   alert("Valor em Euros: €" + valorEuro.toFixed(2));
  //   alert("Valor em " + valorLibra.toFixed(2));
  //   alert("Valor em Pesos: $" + valorPeso.toFixed(2));
}
