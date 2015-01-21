var express = require('express');
var router = express.Router();

var calorie_dictionary = {
  turkeyGroundBeef : 1.52,
  ketchup : 20
};

// var myDiv = document.getElementById("myDiv");
// //Create array of options to be added
// var array = ["Turkey Ground Beef","Ketchup"];
// //Create and append select list
// var selectList = document.createElement("select");
// selectList.id = "mySelect";
// myDiv.appendChild(selectList);
// //Create and append the options
// for (var i = 0; i < array.length; i++) {
//     var option = document.createElement("option");
//     option.value = array[i];
//     option.text = array[i];
//     selectList.appendChild(option);
// }

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// responding to a get
router.get('/', function(req, res){
  var result = calorie_dictionary.turkeyGroundBeef;
  res.render('index',{
    title: 'Hello World!',
    age: result + calorie_dictionary.ketchup
  });

});

// the router is returned as module.exports
module.exports = router;
