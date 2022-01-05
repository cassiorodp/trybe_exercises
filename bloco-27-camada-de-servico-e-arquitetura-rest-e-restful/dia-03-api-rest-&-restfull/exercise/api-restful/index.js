const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json())

app.use('/products', require('./controllers/productController'));

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
