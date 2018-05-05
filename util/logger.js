var winston = require('winston');
const timeFormat = () => (new Date()).toLocaleTimeString();
const dateFormat = (new Date()).toLocaleTimeString();
const dailywinston = require('winston-daily-rotate-file');

var daily_info = new (dailywinston)({
    level: 'info',
    name : 'daily_info',
    filename: './log/info.log',
    timestamp: timeFormat,
    dnpatePattern: 'yyyy-MM-dd',
    colorize : false,
    maxsize: 100000
});

var daily_error = new (dailywinston)({
    level: 'error',
    name : 'daily_error',
    filename: './log/error.log',
    timestamp: timeFormat,
    dnpatePattern: 'yyyy-MM-dd',
    colorize : false,
    maxsize: 100000
});

var debug = new winston.transports.Console({
    level : 'debug',
    colorize : true,
    timestamp : dateFormat
});

const error_logger = new winston.Logger({
    transports :
                [
                    debug,
                    daily_error
                ]
});

const info_logger = new winston.Logger({
    transports :
                [
                    debug,
                    daily_info
                ]
});

exports.debug = function(msg){
    info_logger.debug(msg);
}

exports.info = function(msg){
    info_logger.info(msg);
}

exports.error = function(msg){
    error_logger.error(msg);
}
