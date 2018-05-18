let database = require('../../database/database');
let tablename = 'review'
let logger = require('../../util/logger');

const user_id = "user_id ",
        writer_id = "writer_id",
        study_id = "study_id",
        rating = "rating",
        comment = "comment";

function writeReview(param_user_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]reviewModel-writeReview');
        let values = [param_user_id, dataObj.writer_id, dataObj.study_id, dataObj.rating, dataObj.comment];
        let query = `INSERT INTO ${tablename} (
                            ${user_id},
                            ${writer_id},
                            ${study_id},
                            ${rating},
                            ${comment})  
                    VALUES (?,?,?,?,?)`;
        database.executeByValueResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function readReview(param_user_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]reviewModel-readReview');
        let query = `SELECT * FROM ${tablename} WHERE ${user_id}='${param_user_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function updateReview(param_user_id, param_writer_id, dataObj, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]reviewModel-updateReview');
        let values = [dataObj.rating, dataObj.comment];
        let query = `UPDATE ${tablename} SET
                                ${rating}=?, 
                                ${comment}=? 
                    WHERE ${user_id}='${param_user_id}' AND ${writer_id}='${param_writer_id}'`;
        database.executeByValueResolveResult(query, values, resolveQuery, rejectQuery);
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

function removeReview(param_user_id, param_writer_id, resolveC, rejectC) {
    new Promise((resolveQuery, rejectQuery)=>{
        logger.debug('[3]reviewModel-removeReview');
        let query = `DELETE FROM ${tablename} 
                    WHERE ${user_id}='${param_user_id}' AND ${writer_id}='${param_writer_id}'`;
        database.executeByRawResolveResult(query, resolveQuery, rejectQuery);  
    }).
    then(resolveC).
    catch((error)=>{
        rejectC(error);
    });
}

module.exports = {
    writeReview : writeReview,
    readReview : readReview,
    updateReview : updateReview,
    removeReview : removeReview
}