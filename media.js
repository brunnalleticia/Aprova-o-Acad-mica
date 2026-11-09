const campoNome = document.getElementById("nome");
const campoNota1 = document.getElementById("nota1");
const campoNota2 = document.getElementById("nota2");
const botaoCalcular = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");
 
function calcularMedia() {
    const nome = campoNome.value;
    const nota1 = parseFloat(campoNota1.value);
    const nota2 = parseFloat(campoNota2.value);
 
    // 1. Calcula a média
    const media = (nota1 + nota2) / 2;
 
    // 2. Mostra o resultado na tela
    resultado.textContent = nome + " - " + media.toFixed(2);
}
 
botaoCalcular.addEventListener("click", calcularMedia);
 