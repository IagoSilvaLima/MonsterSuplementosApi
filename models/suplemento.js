var mongoose = require('mongoose');

var suplementoShema = new mongoose.Schema({
  nome : {
    type : String,
    required : true
  },
  preco : {
    type : Number,
    required : true
  },
  marca :{
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    ref : 'marca'
  },
  categoria :{
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    ref : 'categoria'
  }
});


module.exports = mongoose.model('suplemento',suplementoShema);