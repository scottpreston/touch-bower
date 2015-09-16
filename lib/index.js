"use strict";

var touchBower = function () {
};

touchBower.prototype.exec = function () {
    var fs = require('fs');
    fs.createReadStream(__dirname +  '/sample-bower.json').pipe(fs.createWriteStream('bower.json'));
    console.log('created blank bower.json');
};

module.exports = touchBower;

