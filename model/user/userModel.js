let database = require('../../database/database');
let exposure_statusModel = require('../../model/user/exposure_statusModel');
let interestModel = require('../../model/user/interestModel');

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

// signup
function signup(dataObj, resolveResponse, rejectResponse) {
    logger.debug('[3]userModel-signup');
    signupP(dataObj).
    then(makeNewUserESP).
    then(makeNewInterestP).
    then(resolveResponse).
    catch((error)=>{rejectResponse(error)});
}

function signupP(dataObj) {
    return new Promise((resolve, reject)=>{
        let values = [dataObj.id,dataObj.password, dataObj.auth,dataObj.name,dataObj.age,dataObj.region,dataObj.introduction,
                        dataObj.email,dataObj.phone,dataObj.social_id,dataObj.profile_img,dataObj.thumbnail,dataObj.reg_date];
        let query = `INSERT INTO ${tablename} (${id}, ${password}, ${auth}, ${name},${age},${region},${introduction},
                            ${email},${phone},${social_id},${profile_img},${thumbnail},${reg_date}) 
                    VALUES (?,?,?,?,? ,?,?,?,?,? ,?,?,?)`;
        database.executeByValueResolveValue(query, values, resolve, reject);
    });
}

function makeNewUserESP(userId) {
    return new Promise((resolve, reject)=>{
        exposure_statusModel.makeNewUserES(userId, resolve, reject);
    });
}

function makeNewInterestP(userId) {
    return new Promise((resolve, reject)=>{
        interestModel.makeNewInterest(userId, resolve, reject);
    });
}

// getUserInfo
function getUserInfo(param_user_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]userModel-getUserInfo');
        let query = `SELECT * FROM ${tablename} WHERE ${id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getUserInfoByList(param_query, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]userModel-getUserInfo');
        let query = `SELECT * FROM ${tablename} WHERE ${id}=${param_query}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}


// getUserInfoList
function getUserInfoList(resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]userModel-getUserInfoList');
        let query = `SELECT * FROM ${tablename}`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}


// changeUserInfo
function changeUserInfo(param_user_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        let values = [dataObj.password, dataObj.auth,
                        dataObj.name, dataObj.age,
                        dataObj.region, dataObj.introduction,
                        dataObj.email, dataObj.phone,
                        dataObj.social_id, dataObj.profile_img,
                        dataObj.thumbnail];
        let query = `UPDATE ${tablename} SET
                                ${password}=?, ${auth}=?, 
                                ${name}=?, ${age}=?,
                                ${region}=?, ${introduction}=?,
                                ${email}=?, ${phone}=?,
                                ${social_id}=?, ${profile_img}=?,
                                ${thumbnail}=? 
                    WHERE ${id}='${param_user_id}'`;
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}


// leave
function leave(param_user_id, resolve, reject) {
    logger.debug('[3]userModel-leave');
    removeESP(param_user_id).
    then(removeInterestP(param_user_id)).
    then(removeUserP(param_user_id)).
    then(resolve).
    catch((error)=>{reject(error)})
}

function removeInterestP(param_user_id) {
    return new Promise((resolve, reject)=>{
        interestModel.removeInterest(param_user_id, resolve, reject);
    });
}

function removeESP(param_user_id) {
    return new Promise((resolve, reject)=>{
        exposure_statusModel.removeES(param_user_id, resolve, reject);
    });
}

function removeUserP(param_user_id) {
    return new Promise((resolve, reject)=>{
        logger.debug('[3]userModel-removeUserP');
        let query = `DELETE FROM ${tablename} WHERE ${id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolve, reject);
    });
}

module.exports = {
    signup : signup,
    getUserInfo : getUserInfo,
    getUserInfoByList : getUserInfoByList,
    getUserInfoList : getUserInfoList,
    changeUserInfo : changeUserInfo,
    leave : leave
}