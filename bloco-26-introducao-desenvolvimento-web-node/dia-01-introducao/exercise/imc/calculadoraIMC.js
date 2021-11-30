const imc = (peso, altura) => (peso / Math.pow(altura, 2)).toFixed(2);

module.exports = imc;