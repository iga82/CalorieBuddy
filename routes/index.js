var express = require('express');
var router = express.Router();

var calorie_dictionary = {
  turkeyGroundBeef : 1.52
};

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// responding to a get
router.get('/', function(req, res){
  var result = calorie_dictionary.turkeyGroundBeef;
  res.render('index',{
    title: 'Hello World!',
    age: result
  });

});

// the router is returned as module.exports
module.exports = router;
