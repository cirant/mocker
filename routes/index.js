var express = require('express');
var router = express.Router();

router.get('/trabajadores', function(req, res, next) {
  console.log('LILI AQUI VA')

  res.status(200).json({
    hola: "mundo"
  });
});

module.exports = router;
