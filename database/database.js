let mysql = require('mysql');
let config = require('../config/settings');
let logger = require('../util/logger');
let pool;

function connect(done) {
    pool = mysql.createPool(config.local_database_options);
    done();
}

function executeByRaw(query, callback) {
    logger.debug('[4]database-executeByRaw');
    pool.query(query, (err, results, fields)=>{
        setResult(err, results, callback);
    });
}

function executeByValues(query, values, callback) {
    logger.debug('[4]database-executeByValues');
    pool.query(query, values, (err, results, fields)=>{
        setResult(err, results, callback);
    });
}

function setResult(err, results, callback) {
    if(err) {
        logger.error(new Error(err));
    } else {
        callback(err, results);
    }
}

module.exports = {
    connect : connect,
    executeByRaw : executeByRaw,
    executeByValues : executeByValues
}