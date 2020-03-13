const _ = require('lodash');

exports.print = (msg) => {
    console.log("*********");
    console.log(msg);
    console.log("*********");
}

exports.doConcat = (arr) => {
    return _.concat(arr, [80, 90]);
};