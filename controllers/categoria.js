var Categoria = require('./../models/categoria');
var service = require('./../service/crud')(Categoria);

var categoriaController = {
  list : (req,res)=>{
    service.list()
      .then((result)=>{
        res.status(200).json(result.data);
      }).catch((err) =>{
        res.status(500).json(err);
      });
  }

  ,insert : (req,res)=>{
    service.insert(req.body)
      .then((result)=>{
        res.status(200).json(result.data);
      }).catch((err)=>{
        res.status(500).json(err);
      })
  }
}


module.exports = categoriaController;

