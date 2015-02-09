var express = require('express');
var app = express();
var morgan = require('morgan');

// App settings
app.set('port', process.env.PORT || 3000);

// Logger
var morgan = require('morgan');
app.use(morgan('combined'))

// User route handling
var userRoute = require('./routes/users');
app.use(userRoute);

// Error 404 handling
app.use(function(req, res, next){
    console.error('404 occured');
    res.status(404).send('Request not match any urls');
});

module.exports = app;