require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Import routes and grant server access
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

var port = process.env.PORT || 8000;

// LISTENER
app.listen(port);