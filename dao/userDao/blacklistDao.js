let database = require('../../database/database');
let tablename = 'black_user';
let tablename_user = 'user';
let logger = require('../../util/logger');

const user_id = "user_id",
      black_id = "black_id";
      id = "id";

function create(param_user_id, dataObj, callback) {
    logger.debug('[3]blacklistDao-create');
    let values = [param_user_id, dataObj.black_id];
    let query = `INSERT INTO ${tablename} (
                        ${user_id},
                        ${black_id}) 
                VALUES (?,?)`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

// 유저 테이블로 가서 블랙리스트 정보에 필요한 유저정보를 선별해서 가져와야 함
function select(param_user_id, callback) {
    logger.debug('[3]blacklistDao-select');
    let query = `SELECt * FROM ${tablename} WHERE ${user_id}=${param_user_id}`;
    database.executeByRaw(query, (err, data)=>{
        var blacklist = data;
        var queryUser = `SELECT * FROM ${tablename} WHERE ${id}=`;
        for(var i=0; i<blacklist.length; i++){
            queryUser += blacklist[i].black_id;
            if(i != blacklist.length-1) {
                queryUser += ' or id='
            }
        }
        database.executeByRaw(queryUser, callback);
    });
}

function deleteBlacklist(param_black_id, dataObj, callback) {
    logger.debug('[3]blacklistDao-deleteBlacklist');
    let query = `DELETE FROM ${tablename} WHERE ${black_id}=${param_black_id}`
    database.executeByRaw(query, callback);
}

module.exports = {
    create : create,
    select : select,
    delete : deleteBlacklist
}