'use strict';

require('babel-core/register')({});
require('babel-polyfill');

var config = require('../env.config.js');
var server = require('./server').default;

const PORT = process.env.PORT || 1337;

server.listen(PORT, function () {
    console.log('Server listening on: ' + PORT);
});