let mysql = require('mysql');
let config = require('../config/settings');
let logger = require('../util/logger');
let pool;

function connect(done) {
    pool = mysql.createPool(config.local_database_options);
    done();
}

// function executeByRaw(query, callback) {
//     logger.debug('[4]database-executeByRaw');
//     pool.query(query, (err, results, fields)=>{
//         callback(err, results);
//     });
// }

function executeByRawResolveObject(query, param, resolve, reject) {
    logger.debug('[4]database-executeByRawResolveObject');
    pool.query(query, (err, results, fields)=>{
        if(err) reject(err);
        resolve({list:results, param:param});
    });
}

function executeByRawResolveResult(query, resolve, reject) {
    logger.debug('[4]database-executeByRawResolveResult');
    pool.query(query, (err, results, fields)=>{
        if(err) reject(err);
        resolve(results);
    });
}

// function executeByValues(query, values, resolve, reject) {
//     logger.debug('[4]database-executeByValues');
//     pool.query(query, values, (err, results, fields)=>{
//         callback(err, results);
//     });
// }

function executeByValueResolveValue(query, values, resolve, reject) {
    logger.debug('[4]database-executeByValueResolveValue');
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
    // executeByRaw : executeByRaw,
    // executeByRawResolveThen : executeByRawResolveThen,
    executeByRawResolveObject : executeByRawResolveObject,
    executeByRawResolveResult : executeByRawResolveResult,
    executeByValueResolveValue : executeByValueResolveValue,
    executeByValuesResolveResult : executeByValuesResolveResult,
    // executeByValues : executeByValues
}