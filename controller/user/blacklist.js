let dao = require('../../model/userModel/blacklistModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

// router.post('/:user_id/blacklist', blacklist.add);
function addBlackList(req, res) {
    logger.debug('[2]controller-addBlackList');
    let user_id = req.params.user_id;
    var dataObj = req.body;
    dao.create(user_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, "블랙리스트 추가가 완료되었습니다", {}, res);
    });
}

// router.get('/:user_id/blacklist', blacklist.read);
function readBlackList(req, res) {
    logger.debug('[2]controller-readBlackList');
    // 유저 인증 해야 함
    let user_id = req.params.user_id;
    dao.select(user_id, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 블랙리스트 조회가 완료되었습니다`, data, res);
    });
}

// router.delete('/:user_id/blacklist/:black_id', blacklist.delete);
function deleteBlackList(req, res) {
    logger.debug('[2]controller-deleteBlackList');
    let user_id = req.params.user_id;
    let black_id = req.params.black_id;
    var dataObj = req.body;
    dao.update(black_id, dataObj, (err, data)=>{
        if(err) return error.send(500, err, res);
        result.send(200, `${user_id} 블랙리스트 업데이트가 완료되었습니다`, {}, res);
    });
}

module.exports = {
    add : addBlackList,
    read : readBlackList,
    delete : deleteBlackList
}