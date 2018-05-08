let logger = require('../util/logger');
var result = {
    "total": 0,
    "result" : {
        "code": "200",
        "msg": "정상 처리되었습니다"
    },
    "data" : []
}

exports.send = function(code, msg, rows, res) {
    result.total = rows.length;
    result.result.code = code;
    result.result.msg = msg;
    result.data = rows;
    res.send(JSON.stringify(result));     
    logger.info(`[6] COMPLETE`)
}