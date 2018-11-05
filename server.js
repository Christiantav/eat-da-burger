var express = require("express");
var bodyParser = require("body-parser");
require('dotenv').config();
var app = express();

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false

}));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//Import routes and give the server across to them
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// LISTENER
var port = process.env.PORT || 3306;
app.listen(port);