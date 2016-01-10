var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// responding to a get
router.get('/', function(req, res){
  res.render('index',{
    title: 'Macro Buddy',
  });

});

// the router is returned as module.exports
module.exports = router;
