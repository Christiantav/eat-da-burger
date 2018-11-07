var mysql = require('mysql');
require('dotenv').config();

// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// }	else {
	
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
	connection = mysql.createConnection({
		user: process.env.MYSQL_USER,
		host: process.env.MYSQL_HOST,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DBNAME,
		insecureAuth: true
	});	
}

// process.env.MYSQL_PASSWORD

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;