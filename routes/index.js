var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  let canvas = document.getElementById("drawing_board");
  let context = canvas.getContext("2d");
  context.moveTo(0, 0);
  context.lineTo(100, 100);

});

module.exports = router;