const avaliaSinal = require('./avaliaSinal.js');

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