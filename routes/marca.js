var express = require('express');
var router = express.Router();
var controller = require('./../controllers/marca');

router.get('/',controller.list);
router.post('/',controller.insert);

module.exports = router;
