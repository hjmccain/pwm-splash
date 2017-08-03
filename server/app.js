const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

module.exports = app;
