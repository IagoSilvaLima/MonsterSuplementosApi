var Suplemento = require('./../models/suplemento');
var service = require('./../service/crud')(Suplemento);

var suplementoController = {
  list : (req,res)=>{
    service.populate('marca categoria')
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


module.exports = suplementoController;

