'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.articlesGET = function articlesGET (req, res, next) {
  var page = req.swagger.params['page'].value;
  var tag = req.swagger.params['tag'].value;
  var username = req.swagger.params['username'].value;
  var state = req.swagger.params['state'].value;
  var top = req.swagger.params['top'].value;
  Articles.articlesGET(page,tag,username,state,top)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesIdGET = function articlesIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Articles.articlesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesIdPUT = function articlesIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Articles.articlesIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesMeAllGET = function articlesMeAllGET (req, res, next) {
  var page = req.swagger.params['page'].value;
  var per_page = req.swagger.params['per_page'].value;
  Articles.articlesMeAllGET(page,per_page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesMeGET = function articlesMeGET (req, res, next) {
  var page = req.swagger.params['page'].value;
  var per_page = req.swagger.params['per_page'].value;
  Articles.articlesMeGET(page,per_page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesMePublishedGET = function articlesMePublishedGET (req, res, next) {
  var page = req.swagger.params['page'].value;
  var per_page = req.swagger.params['per_page'].value;
  Articles.articlesMePublishedGET(page,per_page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesMeUnpublishedGET = function articlesMeUnpublishedGET (req, res, next) {
  var page = req.swagger.params['page'].value;
  var per_page = req.swagger.params['per_page'].value;
  Articles.articlesMeUnpublishedGET(page,per_page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articlesPOST = function articlesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Articles.articlesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
