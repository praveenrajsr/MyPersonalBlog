var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var handlebars = require('handlebars')

var app = express();
//for public files
app.use(express.static(path.join(__dirname,'public')));
var port = process.env.PORT || 8080;

//public static files
app.use(express.static(path.join(__dirname,'public')));

//views
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

require('./app/routes.js')(app , genpath);

var genpath = path.join(__dirname);
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port);
console.log("server started at port" + port);
