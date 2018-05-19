var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('../util/logger');
var routes = require('../routes/routes');
var fs = require('fs');

module.exports = function(app) {
    // configure middleware
    app.use(morgan('dev', {stream : fs.createWriteStream(__dirname+'/../log/http.log', {'flags' : 'a'})}));
    app.use(morgan(':method :url :date :response-time :status'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    routes(app)
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });
    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        // keep log
        logger.error(err);

        // render the error page
        // res.status(err.status || 500);
        // res.render('error');
        res.send({
            "error" : {
                "code": err.status || 500,
                "msg": err.toString()
            }
        })
    });
}