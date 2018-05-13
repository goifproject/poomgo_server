let dao = require('../../dao/userDao/exposureDao');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

function createExposureStatus(user_id, callback) {
    // 처음에는 빈 데이터를 만들고 추후 update에서 따로 데이터를 받도록 하자
    logger.debug('[2]controller-createExposureStatus');
    dao.create(user_id, callback);
}

// router.get('/:user_id/exposure', exposure_status.read);
function readExposureStatus(req, res) {
    logger.debug('[2]controller-readExposureStatus');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    dao.select(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원정보 노출정보 조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:user_id/exposure', exposure_status.update);
function updateExposureStatus(req, res) {
    logger.debug('[2]controller-updateExposureStatus');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    dao.update(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원 정보 업데이트가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    create : createExposureStatus,
    read : readExposureStatus,
    update : updateExposureStatus
}