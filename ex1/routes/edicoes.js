var express = require('express');
var router = express.Router();
var Edicoes = require('../controllers/edicoes')

router.get('/', function(req, res, next) {
  if(req.query.org){
    Edicoes.listByOrganizador(req.query.org)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else{
    Edicoes.list()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
});

router.get('/:id', function(req, res, next) {
  Edicoes.findById(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});


router.post('/', function(req, res, next) {
  Edicoes.insert(req.body)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});


router.put('/:id', function(req, res, next) {
  return Edicoes.update(req.params.id, req.body)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  return Edicoes.delete(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

module.exports = router;