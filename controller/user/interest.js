let model = require('../../model/user/interestModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');


// function makeNewInterest(user_id, callback) {
//     // 처음에는 빈 데이터를 만들고 추후 update에서 따로 데이터를 받도록 하자
//     logger.debug('[2]controller-makeNewInterest');
//     model.makeNewInterest(user_id, callback);
// }

// router.get('/:user_id/interest', interest.select);
function getInterestInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-getInterestInfo');
        // 유저 인증 해야 함
        let user_id = req.params.user_id;
        model.getInterestInfo(user_id, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id} 관심분야 조회가 완료되었습니다`, data, res);
    }).
    catch((error)=>{
        next(error);
    });
}

// router.put('/:user_id/interest', interest.update);
function changeInterestInfo(req, res, next) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-changeInterestInfo');
        let user_id = req.params.user_id;
        var dataObj = req.body;
        model.changeInterestInfo(user_id, dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, `${req.params.user_id} 관심분야 업데이트가 완료되었습니다`, {}, res);
    }).
    catch((error)=>{
        next(error);
    });
}

module.exports = {
    getInterestInfo : getInterestInfo,
    changeInterestInfo : changeInterestInfo    
}
