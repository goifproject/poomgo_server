let database = require('../../database/database');
let tablename = 'member'
let logger = require('../../util/logger');

const member_id = "member_id", 
      study_id = "study_id";

function create(param_study_id, param_member_id, callback) {
    logger.debug('[3]memberDao-create');
    // TODO dataObj로 바꿔주자
    let values = [param_study_id,
                    param_member_id];
    let query = `INSERT INTO ${tablename} (
                        ${member_id},
                        ${study_id}) 
                VALUES (?,?)`;
    database.executeByValues(query, values, callback);
}

function selectAll(param_study_id, callback) {
    // TODO 권한 설정!
    logger.debug('[3]memberDao-selectAll');
    let query = `SELECT * FROM ${tablename} WHERE ${study_id} = ${param_study_id}`;
    database.executeByRaw(query, callback);
}

function update(param_id, callback) {
    // TODO 상태 바꿔주면서 실제 member에도 추가해 줘야 함
    logger.debug('[3]memberDao-update');
    let values = [dataObj.status]; 
    let query = `UPDATE ${tablename} SET
                        ${status} = ?
                WHERE ${id}=${param_id}`;
    database.executeByValues(query, values, callback);
}

function deleteMember(param_id, callback) {
    logger.debug('[3]memberDao-deleteMember');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_id}`;
    database.executeByRaw(query, values, callback);
}

module.exports = {
    create : create,
    selectAll : selectAll,
    update : update,
    delete : deleteMember
}