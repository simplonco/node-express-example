const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('homepage', { title: 'Hello, World!' });
});

router.get('/robert', (request, response) => {
  response.render('robert', { title: 'Robert sent le camembert!' });
});

module.exports = router;
