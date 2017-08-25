var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var mongoose = require ('mongoose');


//Connect To Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

