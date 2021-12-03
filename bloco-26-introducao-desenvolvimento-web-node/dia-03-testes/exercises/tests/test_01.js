const avaliaSinal = require('../avaliaSinal.js');

const {expect} = require("chai");

describe("Testa função de avaliar sinal", () => {
  it('Caso Positivo', () => {
    const resultado = avaliaSinal(1);

    expect(resultado).equals("positivo");
  })

  it("Caso Negativo", () => {
    const resultado = avaliaSinal(-1);

    expect(resultado).equals("negativo");
  })

  it("Caso Neutro", () => {
    const resultado = avaliaSinal(0);

    expect(resultado).equals("neutro");
  })
})

describe('quando o parâmetro passado não é um número', () => {
  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = avaliaSinal('AAAA');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "o parâmetro deve ser um número"', () => {
      const resposta = avaliaSinal('AAAA');

      expect(resposta).equals('o parâmetro deve ser um número');
    });
  });
});