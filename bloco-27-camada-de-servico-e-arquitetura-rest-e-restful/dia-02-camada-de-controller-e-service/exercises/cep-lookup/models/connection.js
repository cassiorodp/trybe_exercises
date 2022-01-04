// models/connection.js
// require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'default1234',
  database: 'cep_lookup'});

module.exports = connection;