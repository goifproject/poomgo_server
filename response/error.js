var logger = require('../util/logger');
var error = {
    "result" : {
        "code": "",
        "msg": ""
    }
}

exports.send = function(code, err, response){
    var errStr = err.toString();
    if(code === 404){
        error.result.code = 404;
        error.result.msg = "404 Page Not Found : "+errStr;
    } else if(code === 500){
        error.result.code = 500;
        error.result.msg = "500 Internal Server Error : "+errStr;
    }
    response.send(JSON.stringify(result));
    logger.error(`[err] ${err}}`);
}