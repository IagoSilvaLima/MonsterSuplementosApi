var mongoose = require('mongoose');

var marcaSchema = new mongoose.Schema({
  nome:{
    type : String,
    required : true
  }
})

module.exports = mongoose.model('marca',marcaSchema);
