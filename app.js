var express = require('express');
var bodyParser = require('body-Parser');
var cors = require('cors');

var database = require('./database')
var categoria = require('./routes/categoria');
var marca = require('./routes/marca');
var suplemento = require('./routes/suplemento');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/categoria',categoria);
app.use('/marca',marca);
app.use('/suplemento',suplemento);


app.listen(3000,()=>{
  console.log('servidor iniciado');
});