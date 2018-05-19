let database = require('../../database/database');
let attendaceModel = require('../../model/study/attendanceModel');
let tablename = 'schedule'
let logger = require('../../util/logger');

const id = "id", 
      schedule_time = "schedule_time",
      content = "content",
      study_id = "study_id";

function addNewSchedule(param_study_id, dataObj, resolveC, rejectC) {
    addNewScheduleP({dataObj:dataObj,study_id:param_study_id}).
    then(makeAtendanceBookP).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function addNewScheduleP(data) {
    return new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]scheduleModel-addNewSchedule');
        let values = [data.dataObj.schedule_time, data.dataObj.content, data.study_id];
        let query = `INSERT INTO ${tablename} (${schedule_time}, ${content}, ${study_id}) VALUES (?,?,?)`;
        database.executeByValuesResolveAttendance(query, values, resolveQuery, rejectQuery);
    });
}

function makeAtendanceBookP(data) {
    return new Promise((resolveQuery, rejectQuery)=>{
        attendaceModel.makeAtendanceBook(data.study_id, data.insert_id, resolveQuery, rejectQuery);
    });
}


function getScheduleInfo(param_schedule_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]scheduleModel-getScheduleInfo');
        let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_schedule_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getScheduleInfoList(param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]scheduleModel-getScheduleInfoList');
        let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeScheduleInfo(param_schedule_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]scheduleModel-changeScheduleInfo');
        let values = [dataObj.schedule_time, dataObj.content]; 
        let query = `UPDATE ${tablename} SET ${schedule_time} = ?, ${content} = ?
                    WHERE ${id}=${param_schedule_id}`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function removeSchedule(param_schedule_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]scheduleModel-removeSchedule');
        let query = `DELETE FROM ${tablename} WHERE ${id}=${param_schedule_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    addNewSchedule : addNewSchedule,
    getScheduleInfo : getScheduleInfo,
    getScheduleInfoList : getScheduleInfoList,
    changeScheduleInfo : changeScheduleInfo,
    removeSchedule : removeSchedule
}