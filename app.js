let express = require('express');
let configure = require('./config/middleware');
let app  = express();
let db = require('./database/database')
let logger = require('./util/logger');
var path = require('path');


// connect to database
db.connect((err)=>{
    if(err) {
        logger.error(new Error(err));
        process.exit(1);
    } else {
        logger.info('connected to database')
    }
});

// view engine <- error without default view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// configure middleware
configure(app);

module.exports = app;
