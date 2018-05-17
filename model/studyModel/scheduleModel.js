let database = require('../../database/database');
let tablename = 'schedule'
let logger = require('../../util/logger');

const id = "id", 
      schedule_time = "schedule_time",
      content = "content",
      study_id = "study_id";

function create(param_study_id, dataObj, callback) {
    logger.debug('[3]scheduleDao-create');
    let values = [dataObj.schedule_time, 
                    dataObj.content, 
                    param_study_id];
    let query = `INSERT INTO ${tablename} (
                        ${schedule_time}, 
                        ${content}, 
                        ${study_id}) 
                VALUES (?,?,?)`;
    database.executeByValues(query, values, callback);
}

function selectAll(param_study_id, callback) {
    logger.debug('[3]scheduleDao-selectAll');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function select(param_schedule_id, callback) {
    logger.debug('[3]scheduleDao-select');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_schedule_id}`;
    database.executeByRaw(query, callback);
}

function update(param_schedule_id, dataObj, callback) {
    logger.debug('[3]scheduleDao-update');
    let values = [dataObj.schedule_time, 
                    dataObj.content]; 
    let query = `UPDATE ${tablename} SET ${schedule_time} = ?, ${content} = ?
                WHERE ${id}=${param_schedule_id}`;
    database.executeByValues(query, values, callback);
}

function deleteSchedule(param_schedule_id, callback) {
    logger.debug('[3]scheduleDao-deleteSchedule');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_schedule_id}`;
    database.executeByRaw(query, callback);
}

module.exports = {
    create : create,
    selectAll : selectAll,
    select : select,
    update : update,
    deleteSchedule : deleteSchedule
}