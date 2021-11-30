const classificacao = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso (magreza)"
  }
  
  if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal"
  }

  if (imc >= 25 && imc < 30) {
    return('Situação: Acima do peso (sobrepeso)');
  }

  if (imc >= 30 && imc < 35) {
    return('Situação: Obesidade grau I');
  }

  if (imc >= 35 && imc < 40) {
    return('Situação: Obesidade grau II');
  }
};

module.exports = classificacao;