const express = require("express");

const app = express();

app.get('/ping', (req, res) => {
  return res.status(200).json({message: 'pong!'})
})