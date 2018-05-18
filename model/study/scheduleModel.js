let database = require('../../database/database');
let attendaceModel = require('../../model/study/attendanceModel');
let tablename = 'schedule'
let logger = require('../../util/logger');

const id = "id", 
      schedule_time = "schedule_time",
      content = "content",
      study_id = "study_id";

function addNewSchedule(param_study_id, dataObj, callback) {
    logger.debug('[3]scheduleModel-create');
    let values = [dataObj.schedule_time, dataObj.content, param_study_id];
    let query = `INSERT INTO ${tablename} (
                                ${schedule_time}, 
                                ${content}, 
                                ${study_id}) 
                VALUES (?,?,?)`;
    database.executeByValues(query, values, (err, data)=>{
        // 모델간의 연동을 통해 스케줄이 만들어 지는 것과 동시에 자동으로 출석부가 생성된다. 
        attendaceModel.makeAtendanceBook(param_study_id, data.insertId, (err, data)=>{ callback(err, data) });
    });
}

function getScheduleInfo(param_schedule_id, callback) {
    logger.debug('[3]scheduleModel-select');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_schedule_id}`;
    database.executeByRaw(query, callback);
}

function getScheduleInfoList(param_study_id, callback) {
    logger.debug('[3]scheduleModel-selectAll');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function changeScheduleInfo(param_schedule_id, dataObj, callback) {
    logger.debug('[3]scheduleModel-update');
    let values = [dataObj.schedule_time, dataObj.content]; 
    let query = `UPDATE ${tablename} SET ${schedule_time} = ?, ${content} = ?
                WHERE ${id}=${param_schedule_id}`;
    database.executeByValues(query, values, callback);
}

function removeSchedule(param_schedule_id, callback) {
    logger.debug('[3]scheduleModel-deleteSchedule');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_schedule_id}`;
    database.executeByRaw(query, callback);
}

module.exports = {
    addNewSchedule : addNewSchedule,
    getScheduleInfo : getScheduleInfo,
    getScheduleInfoList : getScheduleInfoList,
    changeScheduleInfo : changeScheduleInfo,
    removeSchedule : removeSchedule
}