var elementoData = document.getElementById("dataAtual");
var dataAtual = new Date();

var dia = String(dataAtual.getDate()).padStart(2, '0');
var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
var ano = dataAtual.getFullYear();

var dataFormatada = dia + '/' + mes + '/' + ano;

elementoData.textContent = dataFormatada;
