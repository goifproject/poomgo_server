let database = require('../../database/database');
let tablename = 'review'
let logger = require('../../util/logger');

const user_id = "user_id ",
        writer_id = "writer_id",
        study_id = "study_id",
        rating = "rating",
        comment = "comment";

function create(param_user_id, dataObj, callback) {
    logger.debug('[3]reviewDao-create');
    let values = [param_user_id, dataObj.writer_id, dataObj.study_id, dataObj.rating, dataObj.comment];
    let query = `INSERT INTO ${tablename} (
                        ${user_id},
                        ${writer_id},
                        ${study_id},
                        ${rating},
                        ${comment})  
                VALUES (?,?,?,?,?)`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function select(param_user_id, callback) {
    logger.debug('[3]reviewDao-select');
    let query = `SELECT * FROM ${tablename} WHERE ${user_id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}

function update(param_user_id, param_writer_id, dataObj, callback) {
    logger.debug('[3]reviewDao-update');
    let values = [dataObj.rating, dataObj.comment];
    let query = `UPDATE ${tablename} SET
                            ${rating}=?, 
                            ${comment}=? 
                WHERE ${user_id}=${param_user_id} AND ${study_id}=${param_writer_id};`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function deleteReview(param_user_id, param_writer_id, callback) {
    logger.debug('[3]reviewDao-deleteReview');
    let query = `DELETE FROM ${tablename} 
                WHERE ${user_id}=${param_user_id} AND ${study_id}=${param_writer_id}`;
    database.executeByRaw(query, callback);
}

module.exports = {
    create : create,
    select : select,
    update : update,
    delete : deleteReview
}