const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "idiomas/english.js";
document.head.appendChild(linguaInglesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

let idioma = document.getElementById("idioma");
idioma.addEventListener("change", function(){
    translate(this.value);
})

function translate(idioma){
    let traducao =
    (idioma== "br")? portugues() : (idioma == "en")? english(): null;
setLanguage(traducao);

}

function setLanguage(traducao){
    btSomar = document.getElementById("btSomar"),
    btSomar.value = traducao.soma;
    btSubtrair = document.getElementById("btSubtrair");
    btSubtrair.value = traducao.subtracao;
    btMultiplicar = document.getElementById("btMultiplicar");
    btMultiplicar.value = traducao.multiplicacao;
    btDividir = document.getElementById("btDividir");
    btDividir.value = traducao.divisao;
    h1 = document.getElementById("h1");
    h1.innerHTML = traducao.h1;
}