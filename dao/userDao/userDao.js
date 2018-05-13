let database = require('../../database/database');
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

function create(dataObj, callback) {
    logger.debug('[3]userDao-create');
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
    database.executeByValues(query, values, callback);
}

function selectAll(callback) {
    logger.debug('[3]userDao-selectAll');
    let query = `SELECT * FROM ${tablename}`;
    database.executeByRaw(query, callback);
}

function select(param_user_id, callback) {
    logger.debug('[3]userDao-select');
    let query = `SELECt * FROM ${tablename} WHERE ${id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}

function update(param_user_id, dataObj, callback) {
    logger.debug('[3]userDao-update');
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

function deleteUser(param_user_id, callback) {
    logger.debug('[3]userDao-delete');
    let query = `DELETE FROM ${tablename} WHERE ${id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}


module.exports = {
    create : create,
    selectAll : selectAll,
    select : select,
    update : update,
    delete : deleteUser
}