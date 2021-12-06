const bodyParser = require('body-parser');
const express = require('express');
const login = require('./middlewares/login')

const app = express();

const port = 3000;

app.use(bodyParser.json())

app.post('/user/register', login);

app.post('/user/login')

app.listen(port, () => console.log(`Rodando na porta: ${port}`));
