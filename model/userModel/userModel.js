let database = require('../../database/database');
let exposure = require('../../controller/user/exposure_status');
let tablename = 'user'
let logger = require('../../util/logger');

const id = "id", 
      password = "password",
      auth = "auth",
      name = "name",
      age = "age",
      region = "region",
      introduction = "introduction",
      email = "email",
      phone = "phone",
      social_id = "social_id",
      profile_img = "profile_img",
      thumbnail = "thumbnail",
      reg_date = "reg_date";

function signup(dataObj, callback) {
    logger.debug('[3]userModel-signup');
    let values = [dataObj.id,
                    dataObj.password, 
                    dataObj.auth,
                    dataObj.name,
                    dataObj.age,
                    dataObj.region,
                    dataObj.introduction,
                    dataObj.email,
                    dataObj.phone,
                    dataObj.social_id,
                    dataObj.profile_img,
                    dataObj.thumbnail,
                    dataObj.reg_date];
    let query = `INSERT INTO ${tablename} (
                        ${id}, 
                        ${password}, 
                        ${auth}, 
                        ${name},
                        ${age},
                        ${region},
                        ${introduction},
                        ${email},
                        ${phone},
                        ${social_id},
                        ${profile_img},
                        ${thumbnail},
                        ${reg_date}) 
                VALUES (?,?,?,?,? ,?,?,?,?,? ,?,?,?)`;
    logger.debug(query);
    database.executeByValues(query, values, (err, data)=>{
        // 회원가입 하면서 exposure_status 생성해 줘야 함
        exposure.createExposureStatus(dataObj.id, (err, data)=>{ callback(err, data) });
    });
}

function getUserInfo(param_user_id, callback) {
    logger.debug('[3]userModel-getUserInfo');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}

function getUserInfoList(callback) {
    logger.debug('[3]userModel-getUserInfoList');
    let query = `SELECT * FROM ${tablename}`;
    database.executeByRaw(query, callback);
}

function changeUserInfo(param_user_id, dataObj, callback) {
    logger.debug('[3]userModel-changeUserInfo');
    let values = [dataObj.id,
                    dataObj.password, 
                    dataObj.auth,
                    dataObj.name,
                    dataObj.age,
                    dataObj.region,
                    dataObj.introduction,
                    dataObj.email,
                    dataObj.phone,
                    dataObj.social_id,
                    dataObj.profile_img,
                    dataObj.thumbnail,
                    dataObj.reg_date];
    let query = `UPDATE ${tablename} SET
                            ${id}=?, 
                            ${password}=?, 
                            ${auth}=?, 
                            ${name}=?,
                            ${age}=?,
                            ${region}=?,
                            ${introduction}=?,
                            ${email}=?,
                            ${phone}=?,
                            ${social_id}=?,
                            ${profile_img}=?,
                            ${thumbnail}=?,
                            ${reg_date}=? 
                WHERE ${id}=${param_user_id}`;
    logger.deleteUser(query);
    database.executeByValues(query, values, callback);
}

function leave(param_user_id, callback) {
    logger.debug('[3]userModel-leave');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}


module.exports = {
    signup : signup,
    getUserInfo : getUserInfo,
    getUserInfoList : getUserInfoList,
    changeUserInfo : changeUserInfo,
    leave : leave
}