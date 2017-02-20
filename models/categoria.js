var mongoose = require('mongoose');

var categoriaSchema = new mongoose.Schema({
  nome:{
    type : String,
    required : true
  }
})

module.exports = mongoose.model('categoria',categoriaSchema);
