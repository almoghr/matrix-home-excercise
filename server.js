'use strict';
// libraries
var path = require('path');
var http = require('http');
var oas3Tools = require('oas3-tools');

// constants
const { PORT } = require('./config/config');

var serverPort = PORT;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();
const server = http.createServer(app)
// Initialize the Swagger middleware

module.exports = {app, server, serverPort}