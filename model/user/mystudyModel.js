let database = require('../../database/database');
let tablename = 'mystudy'
let logger = require('../../util/logger');

const user_id = "user_id ",
      study_id = "study_id",
      auth = "auth",
      status = "status";

function addStudyToMyStudy(param_user_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]mystudyModel-addStudyToMyStudy');
        let values = [param_user_id, dataObj.study_id, dataObj.auth, dataObj.status];
        let query = `INSERT INTO ${tablename} (
                            ${user_id},
                            ${study_id},
                            ${auth},
                            ${status}) 
                    VALUES (?,?,?,?)`;
        logger.debug(query);
        database.executeByValueResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getMyStudyList(param_user_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]mystudyModel-getMyStudyList');
        let query = `SELECT * FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeMyStudyInfo(param_user_id, param_study_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]mystudyModel-changeMyStudyInfo');
        let values = [dataObj.status];
        let query = `UPDATE ${tablename} SET ${status}=?    
                    WHERE ${user_id}='${param_user_id}' AND ${study_id}='${param_study_id}'`;
        database.executeByValueResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function removeStudyFromMyStudy(param_user_id, param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]mystudyModel-removeStudyFromMyStudy');
        let query = `DELETE FROM ${tablename} 
                    WHERE ${user_id}='${param_user_id}' AND ${study_id}='${param_study_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    addStudyToMyStudy : addStudyToMyStudy,
    getMyStudyList : getMyStudyList,
    changeMyStudyInfo : changeMyStudyInfo,
    removeStudyFromMyStudy : removeStudyFromMyStudy
}