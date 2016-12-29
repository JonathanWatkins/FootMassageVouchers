// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://dreamersedgeworker%40gmail.com:mMSf5gD9n7MOQRbGC1v3@smtp.gmail.com');

var configDB = require('./config/database.js');
var configAPI = require('./config/api.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(express.static('public'))

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================

// api v1
// attach to path /api/v1
var api = express.Router();
app.use(configAPI.root, api)
require(configAPI.route)(api, passport); // load our routes and pass in our app and fully configured passport

// app actions and navigation routes
// attach to path /
var nav = express.Router();
app.use('/',nav)
require('./app/routes.js')(nav, passport, configAPI.url, transporter); // load our routes and pass in our app and fully configured passport



// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
