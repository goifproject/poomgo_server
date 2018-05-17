let database = require('../../database/database');
let tablename = 'interest'
let logger = require('../../util/logger');

const user_id = "user_id",
      business = "business",
      planning = "planning",
      marketing = "marketing",
      r_d = "r_d",
      public_company = "public_company",
      language = "language",
      certificate = "certificate";

function create(param_user_id, callback) {
    logger.debug('[3]interestDao-create');
    let values = [param_user_id,0,0,0,0,0, 0,0];
    let query = `INSERT INTO ${tablename} (
                        ${user_id},
                        ${business},
                        ${planning},
                        ${marketing},
                        ${r_d},
                        ${public_company},
                        ${language},
                        ${certificate}) 
                VALUES (?,?,?,?,? ,?,?,?)`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function select(param_user_id, callback) {
    logger.debug('[3]interestDao-select');
    let query = `SELECt * FROM ${tablename} WHERE ${user_id}=${param_user_id}`;
    database.executeByRaw(query, callback);
}

function update(param_user_id, dataObj, callback) {
    logger.debug('[3]interestDao-update');
    let values = [dataObj.business,
                    dataObj.planning,
                    dataObj.marketing,
                    dataObj.r_d,
                    dataObj.public_company,
                    dataObj.language,
                    dataObj.certificate];
    let query = `UPDATE ${tablename} SET
                            ${business}=?,
                            ${planning}=?,
                            ${marketing}=?,
                            ${r_d}=?,
                            ${public_company}=?,
                            ${language}=?,
                            ${certificate}=?   
                WHERE ${user_id}=${param_user_id}`;
    logger.debug(query);
    database.executeByValues(query, values, callback);
}

function deleteInterest(param_user_id) {

}

module.exports = {
    create : create,
    select : select,
    update : update,
    delete : deleteInterest
}