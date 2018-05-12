let database = require('../../database/database');
let tablename = 'candidate'
let logger = require('../../util/logger');

const candidate_id = "candidate_id", 
      status = "status",
      study_id = "study_id";

function create(param_study_id, dataObj, callback) {
    logger.debug('[3]candidateDao-create');
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

function selectAll(param_study_id, callback) {
    // TODO 권한 설정!
    logger.debug('[3]candidateDao-selectAll');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function update(param_candidate_id, callback) {
    // TODO 상태 바꿔주면서 실제 member에도 추가해 줘야 함
    logger.debug('[3]candidateDao-update');
    let values = [dataObj.status]; 
    let query = `UPDATE ${tablename} SET
                        ${status} = ?
                WHERE ${id}=${param_candidate_id}`;
    database.executeByValues(query, values, callback);
}

function deleteCandidate(param_candidate_id, callback) {
    logger.debug('[3]candidateDao-deleteCandidate');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_candidate_id}`;
    database.executeByRaw(query, values, callback);
}

module.exports = {
    create : create,
    selectAll : selectAll,
    update : update,
    delete : deleteCandidate
}