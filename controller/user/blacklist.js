let model = require('../../model/user/blacklistModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/blacklist', blacklist.add);
function addUserToBlackList(req, res, next) {
    logger.debug('[2]controller-addToBlackList');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    model.addUserToBlackList(user_id, dataObj, (err, data)=>{
        if(err) return next(err);
        result.send(200, "블랙리스트 추가가 완료되었습니다", {}, res);
    });
}

// router.get('/:user_id/blacklist', blacklist.read);
function getMyBlackList(req, res, next) {
    logger.debug('[2]controller-getMyBlackList');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    model.getMyBlackList(user_id, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${user_id} 블랙리스트 조회가 완료되었습니다`, data, res);
    });
}

// router.delete('/:user_id/blacklist/:black_id', blacklist.delete);
function removeUserFromBlackList(req, res, next) {
    logger.debug('[2]controller-removeFromBlackList');
    let user_id = req.params.user_id;
    let black_id = req.params.black_id;
    var dataObj = req.body;
    model.removeUserFromBlackList(user_id, black_id, dataObj, (err, data)=>{
        if(err) return next(err);
        result.send(200, `${user_id} 블랙리스트 업데이트가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    addUserToBlackList : addUserToBlackList,
    getMyBlackList : getMyBlackList,
    removeUserFromBlackList : removeUserFromBlackList
}