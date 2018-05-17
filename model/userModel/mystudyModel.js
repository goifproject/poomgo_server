let database = require('../../database/database');
let tablename = 'mystudyDao'
let logger = require('../../util/logger');

const user_id = "user_id ",
      study_id = "study_id",
      auth = "auth",
      status = "status";

function create(param_user_id, dataObj, callback) {
    logger.debug('[3]mystudyDao-create');
    let values = [param_user_id, dataObj.study_id, dataObj.auth, dataObj.status];
    let query = `INSERT INTO ${tablename} (
                        ${user_id},
                        ${study_id},
                        ${auth},
                        ${status}) 
                VALUES (?,?,?,?)`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function select(param_user_id, callback) {
    logger.debug('[3]mystudyDao-select');
    let query = `SELECT * FROM ${tablename} WHERE ${user_id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}

function update(param_user_id, param_study_id, dataObj, callback) {
    logger.debug('[3]mystudyDao-update');
    let values = [dataObj.status];
    let query = `UPDATE ${tablename} SET
                            ${status}=?    
                WHERE ${user_id}=${param_user_id} AND ${study_id}=${param_study_id};`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function deleteMystudy(param_user_id, param_study_id, callback) {
    logger.debug('[3]mystudyDao-deleteMystudy');
    let query = `DELETE FROM ${tablename} 
                WHERE ${user_id}=${param_user_id} AND ${study_id}=${param_study_id}`;
    database.executeByRaw(query, callback);
}

module.exports = {
    create : create,
    select : select,
    update : update,
    delete : deleteMystudy
}