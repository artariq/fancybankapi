/* CONFIG FILE */

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./api/user/user'); //routes are defined here
var app = express(); //Create the Express app

//connect to mongodb
var env = process.env.NODE_ENV || 'development';
if(env === 'production'){
 var dburi = 'mongodb://artariq:chitral@ds047040.mongolab.com:47040/rushiesmongodb';
} else{
 var dburi = 'mongodb://127.0.0.1:27017/mybank';
 console.log('connected to local db');
}

mongoose.connect(dburi);

var db = mongoose.connection;
db.on('error', function callback () {
    console.error('connection error');
});
db.once('open', function callback () {
    console.error('connection success');
});

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/', users); //This is our route middleware
 
module.exports = app;
