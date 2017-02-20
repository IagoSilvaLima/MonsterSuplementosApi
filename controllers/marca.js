var Marca = require('./../models/marca');
var service = require('./../service/crud')(Marca);

var marcaController = {
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


module.exports = marcaController;

