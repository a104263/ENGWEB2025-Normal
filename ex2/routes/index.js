var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res) {
  axios.get('http://localhost:25000/edicoes').then(resp => {
    res.render('edicoes', {title: 'Edições da Eurovisão', lEdicoes: resp.data, titulo: "Lista de Edições"})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

// router.get('/paises/:id', function(req, res) {
//   axios.get(`http://localhost:25000/edicoes`).then(resp => {
//     res.render('pais', {país: req.params.id, lEdicoes: resp.data, lEdicoesOrganizadas: resp.data.filter((edicao) => edicao.organizacao == req.params.id)})
//   })
//   .catch(error => {
//     console.log(error);
//     res.render('error', {error: error})
//   }); 
// });

router.get('/:id', function(req, res) {
  id = req.params.id
  axios.get(`http://localhost:25000/edicoes/${id}`).then(resp => {
    res.render('edicao', {title: id, edicao: resp.data})
  })
  .catch(error => {
    console.log(error);
    res.render('error', {error: error})
  }); 
});

module.exports = router;
