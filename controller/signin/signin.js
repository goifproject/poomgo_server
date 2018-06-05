let model = require('../../model/user/userModel');
let logger = require('../../util/logger');
let result = require('../../response/result');
let error = require('../../response/error');

exports.signin = function (req, res) {
    new Promise((resolve, reject)=>{
        logger.debug('[2]controller-signin');
        var dataObj = req.body;
        model.signin(dataObj, resolve, reject);
    }).
    then((data)=>{
        result.send(200, "로그인이 완료되었습니다", data, res)
    }).catch((error)=>{
        next(error);
    });
}