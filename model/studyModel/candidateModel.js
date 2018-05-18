let database = require('../../database/database');
let memberModel = require('../../model/studyModel/memberModel');
let tablename = 'candidate'
let logger = require('../../util/logger');

const candidate_id = "candidate_id", 
      status = "status",
      study_id = "study_id";

function addCandidateToStudy(param_study_id, dataObj, callback) {
    logger.debug('[3]candidateModel-addCandidateToStudy');
    let values = [dataObj.candidate_id, 
                    dataObj.status, 
                    param_study_id];
    let query = `INSERT INTO ${tablename} (
                        ${candidate_id}, 
                        ${status}, 
                        ${study_id}) 
                VALUES (?,?,?)`;
    database.executeByValues(query, values, callback);
}

function getCandidateList(param_study_id, callback) {
    // TODO 권한 설정!
    logger.debug('[3]candidateModel-getCandidateList');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function changeCandidateStatus(param_candidate_id, param_study_id, dataObj, callback) {
    // TODO 상태 바꿔주면서 실제 member에도 추가해 줘야 함
    logger.debug('[3]candidateModel-changeCandidateStatus');
    let candidateStatus = dataObj.status;
    let values = [candidateStatus];
    let query = `UPDATE ${tablename} SET ${status}=? WHERE ${candidate_id}='${param_candidate_id}' AND ${study_id}=${param_study_id}`;
    database.executeByValues(query, values, (err, data)=>{
        if(dataObj.status == 2) {
            memberModel.addMemberToStudy(param_candidate_id, param_study_id, (err, data)=>{ callback(err, data) });
        } else {
            callback(err, data);
        }
    });
}

function removeCandidateFromStudy(param_candidate_id, param_study_id, callback) {
    logger.debug('[3]candidateModel-removeCandidateFromStudy');
    let query = `DELETE FROM ${tablename} WHERE ${candidate_id}=${param_candidate_id} AND ${study_id}=${param_study_id}`;
    database.executeByRaw(query, callback);
}

module.exports = {
    addCandidateToStudy : addCandidateToStudy,
    changeCandidateStatus : changeCandidateStatus,
    getCandidateList : getCandidateList,
    removeCandidateFromStudy : removeCandidateFromStudy
}