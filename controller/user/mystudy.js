let model = require('../../model/user/mystudyModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/mystudy', mystudy.add);
function addStudyToMyStudy(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-addStudyToMyStudy');
        let user_id = req.params.user_id;
        var dataObj = req.body;
        model.addStudyToMyStudy(user_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, "내 스터디 추가 완료되었습니다", {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// router.get('/:user_id/mystudy', mystudy.read);
function getMyStudyList(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getMyStudyList');
        let user_id = req.params.user_id;
        model.getMyStudyList(user_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id}회원 내 스터디 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// router.put('/:user_id/mystudy/:study_id', mystudy.update);
function changeMyStudyInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-changeMyStudyInfo');
        let user_id = req.params.user_id;
        let study_id = req.params.study_id;
        var dataObj = req.body;
        model.changeMyStudyInfo(user_id, study_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id}회원 ${req.params.study_id} 내 스터디 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// router.delete('/:user_id/mystudy/:study_id', mystudy.delete);
function removeStudyFromMyStudy(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-removeStudyFromMyStudy');
        let user_id = req.params.user_id;
        let study_id = req.params.study_id;
        model.removeStudyFromMyStudy(user_id, study_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id}회원 ${req.params.study_id} 내 스터디 삭제가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

module.exports = {
    addStudyToMyStudy : addStudyToMyStudy,
    getMyStudyList : getMyStudyList,
    changeMyStudyInfo : changeMyStudyInfo,
    removeStudyFromMyStudy : removeStudyFromMyStudy
}
