//create all the routing for your app
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get('/', function(req, res) {
    
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };

    console.log(hbsObject);

    res.render('index', hbsObject);
  });
});

//EXPRESS POST ROUTE
router.post('/burgers', function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.insertOne(req.body.burger_name, function(result) {

    console.log(result);

    res.redirect("/");
  });
});

//EXPRESS PUT ROUTE
router.put('/burgers/:id', function(req, res) {
  burger.updateOne(req.params.id, function(result) {

    console.log(result);

    res.redirect('/');
  });
});


//Experts routes for server.js to use. 
module.exports = router;

// burger.insertOne([
//   'burger_name'
// ], [
//   req.body.burger_name
// ], function(data) {
//   res.redirect('/');
// });




// var condition = 'id = ' + req.params.id;

// burger.updateOne({
//   devoured: true
// }, condition, function(data) {
//   res.redirect('/');
// });
// });
