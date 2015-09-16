"use strict";

var touchBower = function () {
};

touchBower.prototype.exec = function () {
    var fs = require('fs');
    fs.createReadStream('./lib/sample-bower.json').pipe(fs.createWriteStream('bower.json'));

    console.log('created bower.json, thanks edit bower.json and run bower install');
};

module.exports = touchBower;

