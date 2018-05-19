let database = require('../../database/database');
let tablename = 'member'
let logger = require('../../util/logger');

const member_id = "member_id", 
      study_id = "study_id";

function addMemberToStudy(param_study_id, param_member_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]memberModel-addMemberToStudy');
        // TODO dataObj로 바꿔주자
        let values = [param_study_id, param_member_id];
        // 중복으로 생성되지 않게 해주자
        let query = `INSERT IGNORE INTO ${tablename} (${member_id}, ${study_id}) VALUES (?,?)`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getMemberList(param_study_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        // TODO 권한 설정!
        logger.debug('[3]memberModel-getMemberList');
        let query = `SELECT * FROM ${tablename} WHERE ${study_id} = '${param_study_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function update(param_member_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        // TODO 상태 바꿔주면서 실제 member에도 추가해 줘야 함
        logger.debug('[3]memberModel-update');
        let values = [dataObj.status]; 
        let query = `UPDATE ${tablename} SET ${status} = ? WHERE ${id}='${param_member_id}'`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function removeMemberFromStudy(param_member_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]memberModel-removeMemberFromStudy');
        let query = `DELETE FROM ${tablename} WHERE ${member_id}='${param_member_id}'`;
        console.log(query);
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    addMemberToStudy : addMemberToStudy,
    getMemberList : getMemberList,
    update : update,
    removeMemberFromStudy : removeMemberFromStudy
}