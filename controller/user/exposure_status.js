let model = require('../../model/user/exposure_statusModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// function makeNewUserES(user_id, callback) {
//     new Promise((resolve, reject)=>{
//         // 처음에는 빈 데이터를 만들고 추후 update에서 따로 데이터를 받도록 하자
//         logger.debug('[2]controller-makeNewUserES');
//         model.makeNewUserES(user_id, callback);
//     }).
//     then((data)=>{
//         result.send(200, "", {}, res);
//     }).
//     catch((error)=>{
//         next(error);
//     });
// }

// router.get('/:user_id/exposure', exposure_status.read);
function getUserESInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getUserESInfo');
        // 유저 인증 해야 함
        let user_id = req.params.user_id;
        model.getUserESInfo(user_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id} 회원정보 노출정보 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// router.put('/:user_id/exposure', exposure_status.update);
function changeUserESInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        let user_id = req.params.user_id;
        var dataObj = req.body;
        model.changeUserESInfo(user_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id} 회원 정보 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

module.exports = {
    getUserESInfo : getUserESInfo,
    changeUserESInfo : changeUserESInfo
}