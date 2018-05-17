let database = require('../../database/database');
let tablename = 'notice'
let logger = require('../../util/logger');

const id = "id", 
      notice = "notice",
      reg_date = "reg_date",
      update_date = "update_date",
      study_id = "study_id";

function makeNewNotice(param_study_id, dataObj, callback) {
    logger.debug('[3]noticeModel-makeNewNotice');
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

function getNoticeInfo(param_notice_id, callback) {
    logger.debug('[3]noticeModel-getNoticeInfo');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_notice_id}`;
    database.executeByRaw(query, callback);
}

function getNoticeInfoList(param_study_id, callback) {
    logger.debug('[3]noticeModel-getNoticeInfoList');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function changeNoticeInfo(param_notice_id, dataObj, callback) {
    logger.debug('[3]noticeModel-changeNoticeInfo');
    let values = [dataObj.notice, 
                    dataObj.update_date]; 
    let query = `UPDATE ${tablename} SET
                        ${notice} = ?,
                        ${update_date} = ?
                WHERE ${id}=${param_notice_id}`;
    database.executeByValues(query, values, callback);
}

function removeNotice(param_notice_id, callback) {
    logger.debug('[3]noticeModel-removeNotice');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_notice_id}`;
    database.executeByRaw(query, callback);
}

module.exports = {
    makeNewNotice : makeNewNotice,
    getNoticeInfo : getNoticeInfo,
    getNoticeInfoList : getNoticeInfoList,
    updachangeNoticeInfoe : changeNoticeInfo,
    removeNotice : removeNotice
}