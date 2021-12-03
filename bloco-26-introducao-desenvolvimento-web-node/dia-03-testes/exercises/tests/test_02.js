const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const escreveArquivo = require('../escreveArquivo');

describe('Executa a função escrevaArquivo', () => {
  describe('a resposta', () => {

    before(() => {
      sinon.stub(fs, "writeFileSync")
    })
    after(() => {
      fs.writeFileSync.restore();
    })

    it('é uma string', () => {
      const result = escreveArquivo('arquivo.txt', 'mensagem teste')

      expect(result).to.be.a('string')
    })

    it('é igual a "ok"', () => {
      const result = escreveArquivo('arquivo.txt', 'mensagem teste');

      expect(result).to.be.equals('ok');
    })
  })
  describe('a função', () => {

    before(() => {
      sinon.stub(fs, "writeFileSync").throws(new Error('Leitura não realizada'))
    })
    after(() => {
      fs.writeFileSync.restore();
    })

    it('falha', () => {
      const result = escreveArquivo('falha.txt', 'erro')

      expect(result).to.be.null
    })
  })
})