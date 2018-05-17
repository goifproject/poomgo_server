let model = require('../../model/userModel/exposure_statusModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

function makeNewUserES(user_id, callback) {
    // 처음에는 빈 데이터를 만들고 추후 update에서 따로 데이터를 받도록 하자
    logger.debug('[2]controller-makeNewUserES');
    model.makeNewUserES(user_id, callback);
}

// router.get('/:user_id/exposure', exposure_status.read);
function getUserESInfo(req, res) {
    logger.debug('[2]controller-getUserESInfo');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    model.getUserESInfo(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원정보 노출정보 조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:user_id/exposure', exposure_status.update);
function changeUserESInfo(req, res) {
    logger.debug('[2]controller-changeUserESInfo');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    model.changeUserESInfo(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원 정보 업데이트가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    getUserESInfo : getUserESInfo,
    changeUserESInfo : changeUserESInfo
}