function clq1() {
    alert("Você clicou no Botão 1");
}

let bt2 = document.getElementById("bt2");
bt2.addEventListener("click", clq2);

function clq2() {
    alert("Você clicou no Botão 2");
}

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2"); 
let resultado = document.querySelector("#resultado");

let btSoma = document.getElementById("btSomar");
btSoma.addEventListener("click", function(){
    somar(Number(valor1.value), Number(valor2.value))}) ;

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

let btSubtracao = document.getElementById("btSubtrair");
btSubtracao.addEventListener("click", function(){
    subtrair(Number(valor1.value), Number(valor2.value))}) ;
function subtrair(a, b){
    let menos = a - b; 
    resultado.innerHTML = menos;
}

let btMultiplicacao = document.getElementById("btMultiplicar");
btMultiplicacao.addEventListener("click", function(){
    multiplicar(Number(valor1.value), Number(valor2.value))}) ;
function multiplicar(a, b){
    let vezes = a * b; 
    resultado.innerHTML = vezes;
}

let btDivisao = document.getElementById("btDividir");
btDivisao.addEventListener("click", function(){
    dividir(Number(valor1.value), Number(valor2.value))}) ;
function dividir(a, b){
    let dividido = a / b; 
    resultado.innerHTML = dividido;
}