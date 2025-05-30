var express = require('express');
var router = express.Router();
var Edicoes = require('../controllers/edicoes')

router.get('/', function(req, res, next) {
  if(req.query.papel){
    if(req.query.papel == 'org'){
      Edicoes.listOrganizadores()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
    }
    else if(req.query.papel == 'venc'){
      Edicoes.listVencedores()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
    }
  }
});

module.exports = router;