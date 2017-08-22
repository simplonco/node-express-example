const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, 'localhost', () => {
  console.log('Server is running';
});
