const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Busca um filme através do ID', () => {
  describe('quando não é encontrado um filme para o ID', () => {
    before(() => {
      sinon.stub(MoviesModel, 'findById')
        .resolves(null);
    });

    after(() => {
      MoviesModel.findById.restore();
    });

    it('retorna "null"', async () => {
      const response = await MoviesService.findById();

      expect(response).to.be.null;
    });
  })


  describe('quando é encontrado o filme para o ID', () => {
    before(() => {
      sinon.stub(MoviesModel, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    });

    after(() => {
      MoviesModel.findById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.findById();

      expect(response).to.be.an('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MoviesService.findById();

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});
