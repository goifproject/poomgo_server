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
        callback(err, results);
    });
}

// function executeByRawResolveThen(query, resolve, reject) {
//     logger.debug('[4]database-executeByRaw');
//     pool.query(query, (err, results, fields)=>{
//         callback(err, results);
//     });
// }

function executeByRawResolveResult(query, callback) {
    logger.debug('[4]database-executeByRaw');
    pool.query(query, (err, results, fields)=>{
        if(err) reject(err);
        resolve(results);
    });
}

function executeByValues(query, values, callback) {
    logger.debug('[4]database-executeByValues');
    pool.query(query, values, (err, results, fields)=>{
        callback(err, results);
    });
}

function executeByValueResolveThen(query, values, resolve, reject) {
    logger.debug('[4]database-executeByValueResolveThen');
    pool.query(query, values, (err, results, fields)=>{
        if(err) reject(err);
        resolve(values[0]);
    });
}

function executeByValuesResolveResult(query, values, resolve, reject) {
    logger.debug('[4]database-executeByValuesResolveResult');
    pool.query(query, values, (err, results, fields)=>{
        if(err) reject(err) 
        resolve(results);
    });
}

// function setResult(err, results, callback) {
//     if(err) {
//         logger.error(new Error(err));
//     } else {
//         callback(err, results);
//     }
// }

module.exports = {
    connect : connect,
    executeByRaw : executeByRaw,
    // executeByRawResolveThen : executeByRawResolveThen,
    executeByRawResolveResult : executeByRawResolveResult,
    executeByValueResolveThen : executeByValueResolveThen,
    executeByValuesResolveResult : executeByValuesResolveResult,
    executeByValues : executeByValues
}