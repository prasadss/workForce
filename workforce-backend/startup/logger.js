
const winston = require('winston');

module.exports = function () {
    winston.exceptions.handle(
        [new winston.transports.Console({ colorize: true, prettyPrint: true })]
    );
}