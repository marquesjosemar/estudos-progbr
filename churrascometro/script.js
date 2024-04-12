/* 
REGRA DE NEGÓCIO DO PROGRAMA - COMO ELE VAI FUNCIONAR

CARNE - 400G POR PESSOA   + DE 6 HORAS = 650G
CERVEJA - 1200 ML POR PESSOA   + DE 6 HORAS = 2000ML
REFRIGERANTE/AGUA - 1000ML POR PESSOA   + DE 6 HORAS = 1500ML

CRIANÇAS VALEM POR 0,5 (METADE DE 1 PESSOA)
*/


let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)

    console.log(qtdTotalCarne);
}


function carnePP(duracao){
    if(duracao >= 6) {
        return 650
    } else{
        return 400;
    }
    
}


