let database = require('../../database/database');
let querybuilder = require('../../util/queryBuilder');
let tablename = 'blacklist';
let userModel = require('./userModel');
let logger = require('../../util/logger');

const user_id = "user_id",
      black_id = "black_id";
      id = "id";

function addUserToBlackList(param_user_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]blacklistDao-addUserToBlackList');
        let values = [param_user_id, dataObj.black_id];
        let query = `INSERT INTO ${tablename} (
                            ${user_id},
                            ${black_id}) 
                    VALUES (?,?)`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

// 유저 테이블로 가서 블랙리스트 정보에 필요한 유저정보를 선별해서 가져와야 함
function getMyBlackList(param_user_id, resolveC, rejectC) {
    getBlackUserListP(param_user_id).
    then(getBlackUserInfoListP).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getBlackUserListP(param_user_id) {
    return new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]blacklistDao-getMyBlackList');
        let query = `SELECT * FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    });
}

function getBlackUserInfoListP(data) {
    return new Promise((resolveQuery, rejectQuery)=>{
        let userIdList = querybuilder.build(data, black_id, id);
        userModel.getUserInfo(userIdList, resolveQuery, rejectQuery);
    });
}

function removeUserFromBlackList(param_user_id, param_black_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]blacklistDao-removeUserFromBlackList');
        let query = `DELETE FROM ${tablename} WHERE ${user_id}='${param_user_id}' AND ${black_id}='${param_black_id}'`
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    addUserToBlackList : addUserToBlackList,
    getMyBlackList : getMyBlackList,
    removeUserFromBlackList : removeUserFromBlackList
}