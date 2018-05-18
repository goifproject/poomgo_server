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

function makeNewInterest(param_user_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]interestModel-makeNewInterest');
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
        database.executeByValuesResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function getInterestInfo(param_user_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]interestModel-getInterestInfo');
        let query = `SELECt * FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function changeInterestInfo(param_user_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]interestModel-changeInterestInfo');
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
                    WHERE ${user_id}='${param_user_id}'`;
        logger.debug(query);
        database.executeByValueResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });   
}

function removeInterest(param_user_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]interestModel-removeInterest');
        let query = `DELETE FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    makeNewInterest : makeNewInterest,
    getInterestInfo : getInterestInfo,
    changeInterestInfo : changeInterestInfo,
    removeInterest : removeInterest
}