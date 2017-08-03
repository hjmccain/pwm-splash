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

con.connect((err) => {
  if(err){
    console.log('Error connecting to DB:', err);
    return;
  }
  console.log('Connection established!');
});

app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
  let userData = Object.assign({}, req.body, {
    date: moment().format()
  });

  console.log(userData);

  con.query('INSERT INTO user_data SET ?', userData, (err, res) => {
    if (err) throw err;
    console.log('Insert completed');
  });

  con.end((err) => {
    // The connection is terminated gracefully
  });

  return res.sendStatus(200);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

module.exports = app;
