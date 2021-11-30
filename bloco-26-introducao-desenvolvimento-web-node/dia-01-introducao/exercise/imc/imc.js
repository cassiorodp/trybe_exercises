const readline = require('readline-sync');
const imc = require('./calculadoraIMC');
const classificacao = require('./verificaIMC');

const altura = readline.questionFloat("Digite sua altura\nR:");
const peso = readline.questionFloat("Digite seu peso\nR:");

const resultado = imc(peso, altura);
const situacao = classificacao(resultado)

console.log(`Seu IMC é de ${resultado}`);
console.log(`Sua situação: ${situacao}`);