let database = require('../../database/database');
let tablename = 'notice'
let logger = require('../../util/logger');

const id = "id", 
      notice = "notice",
      reg_date = "reg_date",
      update_date = "update_date",
      study_id = "study_id";

function makeNewNotice(param_study_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]noticeModel-makeNewNotice');
        let values = [dataObj.notice, 
                        dataObj.reg_date, 
                        param_study_id];
        let query = `INSERT INTO ${tablename} (
                            ${notice}, 
                            ${reg_date}, 
                            ${study_id}) 
                    VALUES (?,?,?)`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getNoticeInfo(param_notice_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]noticeModel-getNoticeInfo');
        let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_notice_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getNoticeInfoList(param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]noticeModel-getNoticeInfoList');
        let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeNoticeInfo(param_notice_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]noticeModel-changeNoticeInfo');
        let values = [dataObj.notice, dataObj.update_date]; 
        let query = `UPDATE ${tablename} SET ${notice} = ?, ${update_date} = ? WHERE ${id}=${param_notice_id}`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function removeNotice(param_notice_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]noticeModel-removeNotice');
        let query = `DELETE FROM ${tablename} WHERE ${id}=${param_notice_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    makeNewNotice : makeNewNotice,
    getNoticeInfo : getNoticeInfo,
    getNoticeInfoList : getNoticeInfoList,
    changeNoticeInfo : changeNoticeInfo,
    removeNotice : removeNotice
}