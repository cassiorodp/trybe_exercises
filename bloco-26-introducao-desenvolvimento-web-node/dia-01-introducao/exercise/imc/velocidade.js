const readline = require('readline-sync');

const distancia = readline.questionFloat("Digite a distancia\nR:");
const tempo = readline.questionFloat("Digite o tempo\nR:");

const velocidade = distancia / tempo;

console.log(`Você estava a ${velocidade}m/s`);