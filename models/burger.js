var orm = require('../config/orm.js');

//Create the burger object
var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res){
			cb(res);
		});
	},
	
	// cols and vals are arrays
	insertOne: function (name, cb) {
		orm.insertOne("burgers", [
		  "burger_name", "devoured"
		], [
		  name, false
		], cb);	
	},

	//The objColVals is an object specifying columns as object keys with associated values
	updateOne: function(id, cb) {
		var condition = "id=" + id;
		orm.updateOne("burgers", {
		  devoured: true
		}, condition, cb);
	}	
};

module.exports = burger;


// (cols, vals, cb) {
// 	orm.insertOne('burgers', cols, vals, function(res) {
// 		cb(res);
// 	});



// function (objColVals, condition, cb) {
// 	orm.updateOne('burgers', objColVals, condition, function(res){
// 		cb(res);
// 	});
// }