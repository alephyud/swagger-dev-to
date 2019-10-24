'use strict';

var utils = require('../utils/writer.js');
var Webhooks = require('../service/WebhooksService');

module.exports.webhooksGET = function webhooksGET (req, res, next) {
  Webhooks.webhooksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksIdDELETE = function webhooksIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Webhooks.webhooksIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksIdGET = function webhooksIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Webhooks.webhooksIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webhooksPOST = function webhooksPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Webhooks.webhooksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
