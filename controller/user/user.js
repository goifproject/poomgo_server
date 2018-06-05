let model = require('../../model/user/userModel');
let logger = require('../../util/logger');
let auth = require('../../util/auth');
let result = require('../../response/result');
let error = require('../../response/error');

// 회원가입
// router.post('/', user.create);
function signup(req, res, next) {
    var dataObj = req.body;
    new Promise((resolve, reject)=>{
        /*
            var form = {
                id          : '',
                password    : '',
                token       : '',
                social_type : ''
            }
        */
        // id 존재 여부 검사
        if(!dataObj.id) {
            reject(new Error('no id'));
        }

        // id 유효성 검사
        if(!isValid(dataObj.id)) {

        }

        // 비밀번호 유효성 검사
        if(dataObj.password) {
            
        }

        // 1. Social Auth
        if(dataObj.token) {
            auth.authSocial(dataObj.token, dataObj.social_type, resolve, reject);
        }
    }).
    then((token)=>{
        new Promise(
            (resolve, reject) => {
                // TODO Datetime 클라이언트랑 협의 필요함
                dataObj.reg_date = new Date();
                model.signup(dataObj, resolve, reject);
            }
        )
    }).
    then(()=>{
        result.send(200, "회원가입이 완료되었습니다", {}, res)
    }).catch((error)=>{
        next(error);
    });
}

// 회원 개인정보 조회
// router.get('/:user_id', user.selectSingle);
function getUserInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getUserInfo');
        // 유저 인증 해야 함
        let user_id = req.params.user_id;
        model.getUserInfo(user_id, resolve, reject);
    }).
    then((data)=>{
        if(data.length == 0) {
            result.send(200, `회원 정보가 없습니다`, {}, res);
        } else {
            result.send(200, `${req.params.user_id} 회원 정보 조회가 완료되었습니다`, data, res);
        }
    }).
    catch((error)=>{
        next(error);
    });
}

// 회원 전체 조회
// router.get('/', user.selectAll);
function getUserInfoList(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getUserInfoList');
        model.getUserInfoList(resolve, reject);
    }).
    then((data)=>{
        if(data.length == 0) {
            result.send(200, "회원이 없습니다", data, res);
        } else {
            result.send(200, "회원 전체 조회가 완료되었습니다", data, res);
        }
    }).
    catch((error)=>{
        next(error);
    });

    // const p1 = () => {
    //     return new Promise(
    //         (resolve, reject) => {
    //             logger.debug('[2]controller-getUserInfoList');
    //             model.getUserInfoList(resolve, reject);
    //         }
    //     )
    // }

    // const onResponse = (data) => {
    //     if(data.length == 0) {
    //         result.send(200, "회원이 없습니다", data, res);
    //     } else {
    //         result.send(200, "회원 전체 조회가 완료되었습니다", data, res);
    //     }
    // }

    // const onError = (error) => {
    //     next(error);
    // }

    // p1()
    // .then(onResponse)
    // .catch(onError)

}

// 회원정보수정
// router.put('/:user_id', user.update);
function changeUserInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-changeUserInfo');
        let user_id = req.params.user_id;
        var dataObj = req.body;
        model.changeUserInfo(user_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id} 회원 정보 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// 회원탈퇴
// router.delete('/:user_id', user.delete);
function leave(req, res, next) {
    leaveP(req, res, next).
    then((data)=>{
        result.send(200, `${req.params.user_id} 회원 탈퇴가 완료되었습니다`, {}, res);
    }).catch((error)=>{
        next(error);
    });
}

function leaveP(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-leave');
        let user_id = req.params.user_id;
        model.leave(user_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id} 회원 탈퇴가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}


module.exports = {
    signup : signup,
    getUserInfo : getUserInfo,
    getUserInfoList : getUserInfoList,
    changeUserInfo : changeUserInfo,
    leave : leave
}