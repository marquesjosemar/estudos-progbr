//importando funções do módulo calculadora

const calculadora = require('./MODULOScalc');

const resultadoSoma = calculadora.soma(4,2);
console.log("resultado da soma: " + resultadoSoma)

const resultadoMult = calculadora.mult(3,5)
console.log("resultado da multiplicação: " + resultadoMult)