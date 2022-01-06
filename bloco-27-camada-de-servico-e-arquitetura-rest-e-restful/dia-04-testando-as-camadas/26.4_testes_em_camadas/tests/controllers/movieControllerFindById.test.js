const sinon = require('sinon');
const { expect } = require('chai')

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');

describe('Ao chamar o controller de findById', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesServices, 'findById')
        .resolves(null);
    })

    after(() => {
      MoviesServices.findById.restore();
    })

    it('é chamado o método "status" passando 404', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" passando a mensagem "Filme não encontrado."', async () => {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith('Filme não encontrado.')).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781'
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesServices, 'findById')
        .resolves({
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    })

    after(() => {
      MoviesServices.findById.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});
