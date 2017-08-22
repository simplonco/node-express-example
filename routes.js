const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('homepage', { title: 'Hello, World!' });
});

router.get('/robert', (request, response) => {
  response.render('robert', { title: 'Robert aime le camembert!', check: false });
});

router.post('/city', (request, response) => {
  console.log(request.body.city);
  // response.render('weather');
});

module.exports = router;
