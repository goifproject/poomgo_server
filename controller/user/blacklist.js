let model = require('../../model/userModel/blacklistModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/blacklist', blacklist.add);
function addToBlackList(req, res) {
    logger.debug('[2]controller-addToBlackList');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    model.create(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "블랙리스트 추가가 완료되었습니다", {}, res);
    });
}

// router.get('/:user_id/blacklist', blacklist.read);
function getMyBlackList(req, res) {
    logger.debug('[2]controller-getMyBlackList');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    model.select(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 블랙리스트 조회가 완료되었습니다`, data, res);
    });
}

// router.delete('/:user_id/blacklist/:black_id', blacklist.delete);
function removeFromBlackList(req, res) {
    logger.debug('[2]controller-removeFromBlackList');
    let user_id = req.params.user_id;
    let black_id = req.params.black_id;
    var dataObj = req.body;
    model.update(black_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 블랙리스트 업데이트가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    addToBlackList : addToBlackList,
    getMyBlackList : getMyBlackList,
    removeFromBlackList : removeFromBlackList
}