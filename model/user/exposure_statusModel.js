let database = require('../../database/database');
let tablename = 'exposure'
let logger = require('../../util/logger');

const user_id = "user_id",
      age = "age",
      region = "region",
      introduction = "introduction",
      email = "email",
      phone = "phone",
      social_id = "social_id",
      profile_img = "profile_img",
      thumbnail = "thumbnail",
      career = "career",
      interest = "interest";

function makeNewUserES(param_user_id, resolve, reject) {
    logger.debug('[3]exposureModel-makeNewUserES');
    let values = [param_user_id,0,0,0,0, 0,0,0,0,0, 0];
    let query = `INSERT INTO ${tablename} (
                        ${user_id},
                        ${age},
                        ${region},
                        ${introduction},
                        ${email},
                        ${phone},
                        ${social_id},
                        ${profile_img},
                        ${thumbnail},
                        ${career},
                        ${interest}) 
                VALUES (?,?,?,?,? ,?,?,?,?,? ,?)`;
    database.executeByValueResolveThen(query, values, resolve, reject);
}

function getUserESInfo(param_user_id, callback) {
    logger.debug('[3]exposureModel-getUserESInfo');
    let query = `SELECT * FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
    database.executeByRaw(query, callback);
}

function changeUserESInfo(param_user_id, dataObj, callback) {
    // logger.debug('[3]exposureModel-changeUserESInfo');
    let values = [dataObj.age,
                    dataObj.region,
                    dataObj.introduction,
                    dataObj.email,
                    dataObj.phone,
                    dataObj.social_id,
                    dataObj.profile_img,
                    dataObj.thumbnail,
                    dataObj.career,
                    dataObj.interest];
    let query = `UPDATE ${tablename} SET
                            ${age}=?,
                            ${region}=?,
                            ${introduction}=?,
                            ${email}=?,
                            ${phone}=?,
                            ${social_id}=?,
                            ${profile_img}=?,
                            ${thumbnail}=?,
                            ${career}=?,
                            ${interest}=?  
                WHERE ${user_id}='${param_user_id}'`;
    database.executeByValues(query, values, callback);
}

function removeES(param_user_id, resolve, reject) {
    logger.debug('[3]exposureModel-removeES');
    let query = `DELETE FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
    database.executeByRawResolveResult(query, resolve, reject);
}

module.exports = {
    makeNewUserES : makeNewUserES,
    getUserESInfo : getUserESInfo,
    changeUserESInfo : changeUserESInfo,
    removeES : removeES
}