var express = require('express');
var configure = require('./config/middleware');
var app = express();

configure(app);

module.exports = app;
