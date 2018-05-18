let model = require('../../model/userModel/interestModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');


function makeNewInterest(user_id, callback) {
    // 처음에는 빈 데이터를 만들고 추후 update에서 따로 데이터를 받도록 하자
    logger.debug('[2]controller-makeNewInterest');
    model.makeNewInterest(user_id, callback);
}

// router.get('/:user_id/interest', interest.select);
function getInterestInfo(req, res, next) {
    logger.debug('[2]controller-getInterestInfo');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    model.getInterestInfo(user_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${user_id} 관심분야 조회가 완료되었습니다`, data, res);
    });
}

// router.put('/:user_id/interest', interest.update);
function changeInterestInfo(req, res, next) {
    logger.debug('[2]controller-changeInterestInfo');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    model.changeInterestInfo(user_id, dataObj, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${user_id} 관심분야 업데이트가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    getInterestInfo : getInterestInfo,
    changeInterestInfo : changeInterestInfo    
}
