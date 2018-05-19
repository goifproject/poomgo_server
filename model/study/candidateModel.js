let database = require('../../database/database');
let memberModel = require('../../model/study/memberModel');
let tablename = 'candidate'
let logger = require('../../util/logger');

const candidate_id = "candidate_id", 
      status = "status",
      study_id = "study_id";

function addCandidateToStudy(param_study_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]candidateModel-addCandidateToStudy');
        let values = [dataObj.candidate_id, dataObj.status, param_study_id];
        let query = `INSERT INTO ${tablename} (${candidate_id}, ${status}, ${study_id}) VALUES (?,?,?)`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }). 
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getCandidateList(param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        // TODO 권한 설정!
        logger.debug('[3]candidateModel-getCandidateList');
        let query = `SELECT * FROM ${tablename} WHERE ${study_id}='${param_study_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeCandidateStatus(param_candidate_id, param_study_id, dataObj, resolveC, rejectC) {
    var pData = {
        status : dataObj.status,
        param_candidate_id : param_candidate_id,
        param_study_id : param_study_id
    }
    changeCandidateStatusP(pData).
    then(addMemberToStudyP(pData)).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeCandidateStatusP(data) {
    return new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]candidateModel-changeCandidateStatus');
        let candidateStatus = data.status;
        let values = [candidateStatus];
        let query = `UPDATE ${tablename} SET ${status}=? WHERE ${candidate_id}='${data.param_candidate_id}' AND ${study_id}='${data.param_study_id}'`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    });
}

function addMemberToStudyP(data) {
    return new Promise((resolveQuery, rejectQuery)=>{
        if(data.status == 2) {
            memberModel.addMemberToStudy(data.param_candidate_id, data.param_study_id, resolveQuery, rejectQuery);
        }
    });
}


function removeCandidateFromStudy(param_candidate_id, param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{  
        logger.debug('[3]candidateModel-removeCandidateFromStudy');
        let query = `DELETE FROM ${tablename} WHERE ${candidate_id}='${param_candidate_id}' AND ${study_id}='${param_study_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    addCandidateToStudy : addCandidateToStudy,
    changeCandidateStatus : changeCandidateStatus,
    getCandidateList : getCandidateList,
    removeCandidateFromStudy : removeCandidateFromStudy
}