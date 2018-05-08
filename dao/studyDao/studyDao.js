let database = require('../../database/database');
let tablename = 'study'
let logger = require('../../util/logger');

const study_id = "study_id",
      director_id = "director_id",
      name = "name",
      reg_date = "reg_date",
      update_date = "update_date",
      start_date = "start_date",
      duration = "duration",
      end_date = "end_date",
      region = "region",
      category = "category",
      description = "description",
      limit = "limit",
      study_status = "study_status",
      number = "number",
      thumbnail = "thumbnail";

function create(dataObj, callback) {
    let values = [dataObj.director_id, 
                    dataObj.name, 
                    dataObj.reg_date, 
                    dataObj.start_date,
                    dataObj.duration, 
                    dataObj.end_date, 
                    dataObj.region, 
                    dataObj.category,
                    dataObj.description, 
                    dataObj.limit, 
                    dataObj.study_status, 
                    dataObj.thumbnail]; 
    let query = `INSERT INTO ${tablename} (
                        ${director_id}, 
                        ${name}, 
                        ${reg_date}, 
                        ${start_date}, 
                        ${duration}, 
                        ${end_date},
                        ${region}, 
                        ${category}, 
                        ${description}, 
                        ${limit}, 
                        ${study_status}, 
                        ${thumbnail}) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    database.executeByValues(query, values, callback);
}

function selectAll(callback) {
    logger.info('[3]dao-study');
    let query = `SELECT * FROM ${tablename}`;
    database.executeByRaw(query, callback);
}

function select(param, callback) {
    let studyId = param;
    let query = `SELECt * FROM ${tablename} WHERE ${study_id}=${studyId}`;
    database.executeByRaw(query, callback);
}

function update(param, callback) {
    let studyId = param;
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
    let query = `UPDATE ${tablename} (
                        ${name}, 
                        ${start_date}, 
                        ${duration}, 
                        ${end_date}, 
                        ${region}, 
                        ${category}, 
                        ${description}, 
                        ${limit}, 
                        ${study_status}, 
                        ${thumbnail}) 
                VALUES (?,?,?,?,?,?,?,?,?,?)
                WHERE ${study_id}=${studyId}`;
    database.executeByValues(query, values, callback);
}

function deleteStudy(param, callback) {
    let studyId = param;
    let query = `DELETE FROM ${tablename} WHERE ${study_id}=${studyId}`;
    database.executeByRaw(query, values, callback);
}

module.exports = {
    create : create,
    selectAll : selectAll,
    select : select,
    update : update,
    deleteStudy : deleteStudy
}