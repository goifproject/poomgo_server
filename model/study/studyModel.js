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

function createNewStudy(dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]studyModel-createNewStudy');
        // study_time도 꺼내와야 함
        let values = [dataObj.director_id, dataObj.name, 
                        dataObj.reg_date, dataObj.start_date,
                        dataObj.duration, dataObj.region, 
                        dataObj.category, dataObj.description, 
                        dataObj.limit, dataObj.status, 
                        dataObj.number, dataObj.thumbnail]; 
        let query = `INSERT INTO 
                    ${tablename} (
                        ${director_id}, ${name}, 
                        ${reg_date}, ${start_date}, 
                        ${duration}, ${region}, 
                        ${category}, ${description}, 
                        ${limit}, ${number},
                        ${status}, ${thumbnail}) 
                    VALUES (?,?,?,?,?, ?,?,?,?,?, ?,?)`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });    
}

function getStudyInfo(param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]studyModel-getStudyInfo');
        let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_study_id}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getStudyInfoList(resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]studyModel-getStudyInfoList');
        let query = `SELECT * FROM ${tablename}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeStudyInfo(param_study_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]studyModel-changeStudyInfo');
        let values = [dataObj.name, 
            dataObj.start_date, 
            dataObj.duration,
            dataObj.region,
            dataObj.category, 
            dataObj.description, 
            dataObj.limit, 
            dataObj.status, 
            dataObj.thumbnail]; 
        let query = `UPDATE ${tablename} SET
                    ${name} = ?, 
                    ${start_date} = ?, 
                    ${duration} = ?,
                    ${region} = ?, 
                    ${category} = ?, 
                    ${description} = ?, 
                    ${limit} = ?, 
                    ${status} = ?, 
                    ${thumbnail} = ?
                WHERE ${id}=${param_study_id}`;
        logger.debug(`[3]query-${query}`);
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function closeStudy(param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{ 
        logger.debug('[3]studyModel-closeStudy');
        let query = `DELETE FROM ${tablename} WHERE ${id}=${param_study_id}`;
        logger.debug(`[3]query-${query}`);
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    createNewStudy : createNewStudy,
    getStudyInfo : getStudyInfo,
    getStudyInfoList : getStudyInfoList,
    changeStudyInfo : changeStudyInfo,
    closeStudy : closeStudy
}