require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const Cep = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/error.js');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({message: 'pong!'})
})

app.get('/cep/:cep', Cep.findAddressByCep);
app.post('/cep', Cep.create);

app.use(errorMiddleware);
const PORT = 3000

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); })