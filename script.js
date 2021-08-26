

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputOpalas = document.getElementById("opalas");

let resultado = document.getElementById("resultado");


function calcular(){
    console.log("Calculando...");



   let adultos = inputAdultos.value
   
   let crianças = inputCriancas.value

   let opalas = inputOpalas.value




   
    let qtdTotalCarne = (400 * adultos) + 
    (400 / 2 * crianças) + (300 * opalas);

    let qtdTotalCerveja = (2800 * adultos) + (5000 * opalas);
    
    let qtdTotalRefriSucoAgua = (1500 * crianças);


    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}g de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 473)} latões de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefriSucoAgua / 2000)} Pet's de 2L de Refrigerante/Suco/Água</p>`
    
    
}





