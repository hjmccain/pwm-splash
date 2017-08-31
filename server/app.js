const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const moment = require('moment');

const app = express();
const con = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'pwm_test'
});

app.use(bodyParser.json());

con.connect((err) => {
  if(err){
    console.log('Error connecting to DB:', err);
    return;
  }
  console.log('DB connection established.');
});

app.post('/feedback', (req, res) => {
  let error = false;
  const userData = Object.assign({}, req.body, { date: moment().format() });

  con.query('INSERT INTO user_data SET ?', userData, (err, res) => {
    if (err) {
      error = true;
      throw err;
    }
  });

  con.end((err) => {});

  return error ? res.sendStatus(500) : res.sendStatus(200);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

module.exports = app;
