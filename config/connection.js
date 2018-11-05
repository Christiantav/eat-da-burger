var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
	connection = mysql.createConnection({
		port: 3306,
		host: process.env.MYSQL_HOST,
		user: 'root',
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DBNAME
	});	
}

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
