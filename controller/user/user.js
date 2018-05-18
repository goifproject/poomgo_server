let model = require('../../model/userModel/userModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// 회원가입
// router.post('/', user.create);
function signup(req, res) {
    logger.debug('[2]controller-signup');
    var dataObj = req.body;
    dataObj.reg_date = new Date();
    // TODO Datetime 클라이언트랑 협의 필요함
    dataObj.reg_date = new Date();
    model.signup(dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "회원가입이 완료되었습니다", {}, res);
    });
}

// 회원 개인정보 조회
// router.get('/:user_id', user.selectSingle);
function getUserInfo(req, res) {
    logger.debug('[2]controller-getUserInfo');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    model.getUserInfo(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원 정보 조회가 완료되었습니다`, data, res);
    });
}

// 회원 전체 조회
// router.get('/', user.selectAll);
function getUserInfoList(req, res) {
    logger.debug('[2]controller-getUserInfoList');
    model.getUserInfoList((err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "회원 전체 조회가 완료되었습니다", data, res);
    });
}

// 회원정보수정
// router.put('/:user_id', user.update);
function changeUserInfo(req, res) {
    logger.debug('[2]controller-changeUserInfo');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    model.changeUserInfo(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원 정보 업데이트가 완료되었습니다`, {}, res);
    });
}

// 회원탈퇴
// router.delete('/:user_id', user.delete);
function leave(req, res) {
    logger.debug('[2]controller-leave');
    let user_id = req.params.user_id;
    model.leave(user_id, (err, data)=>{
        // deletUser와 함께 관련 모든 데이터를 삭제해야 함
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 회원 탈퇴가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    signup : signup,
    getUserInfo : getUserInfo,
    getUserInfoList : getUserInfoList,
    changeUserInfo : changeUserInfo,
    leave : leave
}