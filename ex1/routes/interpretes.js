var express = require('express');
var router = express.Router();
var Edicoes = require('../controllers/edicoes')

router.get('/', function(req, res, next) {
  Edicoes.listInterpretes()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

module.exports = router;