'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const {COOKIE_MAX_AGE_LIFE_IN_SECONDS} = require('../constants/consts.js')

module.exports.calculatePOST = function calculatePOST (req, res, next, body, xCalculationMethod) {
  Default.calculatePOST(body, req.headers['x-calculation-method'])
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next, body) {
  Default.loginPOST(body)
    .then(function (response) {
      res.cookie("authorization", response, {
        httpOnly: true,
        maxAge: COOKIE_MAX_AGE_LIFE_IN_SECONDS,
      });
      utils.writeJson(res, {status:'ok'});
    })
    .catch(function (response) {
      utils.writeJson(res, 'username or password is not valid', 400);
    });
};
