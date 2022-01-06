const mongoConnection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title,
    directedBy,
    releaseYear
  };
};

const findById = async (id) => {
  const connect = await mongoConnection.getConnection();
  const movie = await connect.collection('movies').findOne({_id: ObjectId(id)});

  if (!movie) return null

  const {
    _id,
    title,
    directedBy,
    releaseYear
  } = movie;
  return {
    id: _id,
    title,
    directedBy,
    releaseYear
  };
}

module.exports = {
  create,
  getAll,
  findById
};
