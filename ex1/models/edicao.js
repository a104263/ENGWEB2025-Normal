var mongoose = require('mongoose')

var musicaSchema = new mongoose.Schema({
  _id: String,
  título: String,
  link: String,
  país: String,
  compositor : String,
  intérprete : String,
  letra: String
});

var edicaoSchema = new mongoose.Schema({
  _id : String,
  anoEdição: String,
  organizacao: String,
  vencedor: String,
  musicas: [musicaSchema]
}, { collection: 'edicoes' });

module.exports = mongoose.model('Edicao', edicaoSchema)