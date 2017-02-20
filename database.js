var mongoose = require('mongoose');

var mongo = mongoose.connect('mongodb://localhost/monstersuplementos').connection;

mongo.on('connected',function(){
   console.log('mongo conectado com sucesso'); 
});

mongo.on('error',function(){
   console.log('aconteceu algum erro com o mongo'); 
});