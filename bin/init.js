var qrcode = require('qrcode-terminal')
var fs = require('fs')
var path = require('path')
var config = require('../wdio.conf.js').config

var cmdId = Math.floor(Math.random() * 10000)
fs.writeFileSync('wdio.cid', cmdId, {encoding: 'utf8'})

var url = config.host + ':' + config.port + 
  '/web-driverify?cmd=' + cmdId;

console.info('random command ID generate to wdio.cid')
console.log('open this url:');
console.log(url);
qrcode.generate(url);
