let dao = require('../../dao/userDao/mystudyDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/mystudy', mystudy.add);
function addToMyStudy(req, res) {
    logger.debug('[2]controller-addToMyStudy');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    dao.create(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "내 스터디 추가 완료되었습니다", {}, res);
    });
}

// router.get('/:user_id/mystudy', mystudy.read);
function readMyStudy(req, res) {
    logger.debug('[2]controller-readMyStudy');
    let user_id = req.params.user_id;
    dao.select(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id}회원 내 스터디 조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:user_id/mystudy/:study_id', mystudy.update);
function updateMyStudy(req, res) {
    logger.debug('[2]controller-updateMyStudy');
    let user_id = req.params.user_id;
    let study_id = req.params.study_id;
    var dataObj = req.body;
    dao.update(user_id, study_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id}회원 ${study_id} 내 스터디 업데이트가 완료되었습니다`, {}, res);
    });
}

// router.delete('/:user_id/mystudy/:study_id', mystudy.delete);
function deleteMyStudy(req, res) {
    logger.debug('[2]controller-deleteMyStudy');
    let user_id = req.params.user_id;
    let study_id = req.params.study_id;
    dao.delete(user_id, study_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id}회원 ${study_id} 내 스터디 삭제가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    add : addToMyStudy,
    read : readMyStudy,
    update : updateMyStudy,
    delete : deleteMyStudy
}
