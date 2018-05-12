let database = require('../../database/database');
let tablename = 'notice'
let logger = require('../../util/logger');

const id = "id", 
      notice = "notice",
      reg_date = "reg_date",
      update_date = "update_date",
      study_id = "study_id";

function create(param_study_id, dataObj, callback) {
    logger.debug('[3]noticeDao-create');
    let values = [dataObj.notice, 
                    dataObj.reg_date, 
                    param_study_id];
    let query = `INSERT INTO ${tablename} (
                        ${notice}, 
                        ${reg_date}, 
                        ${study_id}) 
                VALUES (?,?,?)`;
    database.executeByValues(query, values, callback);
}

function selectAll(param_study_id, callback) {
    logger.debug('[3]noticeDao-selectAll');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function select(param_notice_id, callback) {
    logger.debug('[3]noticeDao-select');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_notice_id}`;
    database.executeByRaw(query, callback);
}

function update(param_notice_id, callback) {
    logger.debug('[3]noticeDao-update');
    let values = [dataObj.notice, 
                    dataObj.update_date]; 
    let query = `UPDATE ${tablename} SET
                        ${notice} = ?,
                        ${update_date} = ?
                WHERE ${id}=${param_notice_id}`;
    database.executeByValues(query, values, callback);
}

function deleteNotice(paraparam_notice_idm_id, callback) {
    logger.debug('[3]noticeDao-deleteNotice');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_notice_id}`;
    database.executeByRaw(query, values, callback);
}

module.exports = {
    create : create,
    selectAll : selectAll,
    select : select,
    update : update,
    deleteNotice : deleteNotice
}