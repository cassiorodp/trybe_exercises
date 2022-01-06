const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient, ObjectId } = require('mongodb');

const { getConnection } = require('../models/mongoMockConnection');
const MoviesModel = require('../../models/movieModel');

describe('Busca o filme pelo Id', () => {
  let connectionMock;

  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  })

  after(() => {
    MongoClient.connect.restore();
  })

  describe('Quando não é encontrado o filme', () => {
    it('retorna null', async () => {
      const result = await MoviesModel.findById(ID_EXAMPLE)

      expect(result).to.be.null
    })
  })

  describe('Quando é encontrado o filme', () => {
    before(async () => {
      const moviesCollection = await connectionMock;
      await moviesCollection.db('model_example').collection('movies').insertOne({
        _id: ObjectId(ID_EXAMPLE),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    after(async() => {
      await connectionMock.db('model_example').collection('movies').drop();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.findById(ID_EXAMPLE);

      expect(response).to.be.an('object');
    });

    it('o objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MoviesModel.findById(ID_EXAMPLE);

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  })
})