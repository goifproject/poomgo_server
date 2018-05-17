let database = require('../../database/database');
let tablename = 'study'
let logger = require('../../util/logger');
const id = "id",
      director_id = "director_id",
      name = "name",
      reg_date = "reg_date",
      update_date = "update_date",
      start_date = "start_date",
      duration = "duration",
      region = "region",
      category = "category",
      description = "description",
      limit = "lim",
      status = "status",
      number = "number",
      thumbnail = "thumbnail";

function createNewStudy(dataObj, callback) {
    logger.debug('[3]studyModel-createNewStudy');
    // study_time도 꺼내와야 함
    let values = [dataObj.director_id, 
                    dataObj.name, 
                    dataObj.reg_date, 
                    dataObj.start_date,
                    dataObj.duration, 
                    dataObj.region, 
                    dataObj.category,
                    dataObj.description, 
                    dataObj.limit, 
                    dataObj.status, 
                    dataObj.number,
                    dataObj.thumbnail]; 
    let query = `INSERT INTO 
                ${tablename} (
                    ${director_id}, 
                    ${name}, 
                    ${reg_date}, 
                    ${start_date}, 
                    ${duration}, 
                    ${region}, 
                    ${category}, 
                    ${description}, 
                    ${limit}, 
                    ${number},
                    ${status}, 
                    ${thumbnail}) 
                VALUES (?,?,?,?,?, ?,?,?,?,?, ?,?)`;
    logger.debug(`[3]query-${query}`);
    database.executeByValues(query, values, callback);
}

function getStudyInfo(param_study_id, callback) {
    logger.debug('[3]studyModel-getStudyInfo');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_study_id}`;
    logger.debug(`[3]query-${query}`);
    database.executeByRaw(query, callback);
}

function getStudyInfoList(callback) {
    logger.debug('[3]studyModel-getStudyInfoList');
    let query = `SELECT * FROM ${tablename}`;
    database.executeByRaw(query, callback);
}

function changeStudyInfo(param_study_id, dataObj, callback) {
    logger.debug('[3]studyModel-changeStudyInfo');
    let values = [dataObj.name, 
                    dataObj.start_date, 
                    dataObj.duration, 
                    dataObj.end_date, 
                    dataObj.region,
                    dataObj.category, 
                    dataObj.description, 
                    dataObj.limit, 
                    dataObj.study_status, 
                    dataObj.thumbnail]; 
    let query = `UPDATE ${tablename} SET
                    ${name} = ?, 
                    ${start_date} = ?, 
                    ${duration} = ?, 
                    ${end_date} = ?, 
                    ${region} = ?, 
                    ${category} = ?, 
                    ${description} = ?, 
                    ${limit} = ?, 
                    ${study_status} = ?, 
                    ${thumbnail} = ?
                WHERE ${id}=${param_study_id}`;
    logger.debug(`[3]query-${query}`);
    database.executeByValues(query, values, callback);
}

function closeStudy(param_study_id, callback) {
    logger.debug('[3]studyModel-closeStudy');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_study_id}`;
    logger.debug(`[3]query-${query}`);
    database.executeByRaw(query, callback);
}

module.exports = {
    createNewStudy : createNewStudy,
    getStudyInfo : getStudyInfo,
    getStudyInfoList : getStudyInfoList,
    changeStudyInfo : changeStudyInfo,
    closeStudy : closeStudy
}