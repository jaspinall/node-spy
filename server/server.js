'use strict';

const express = require('express');
const app = express();
const main = require('./mainController');
const nodeSpy = require('../lib/node-spy');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(nodeSpy.logExt);

app.get('/', main.hello, main.goodbye);
app.get('/another', main.hello);

app.listen(3000, (err) => {
  if (err) console.error(err);
  else console.log('Connected to port 3000');
});

module.exports = app;
