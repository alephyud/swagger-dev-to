'use strict';


/**
 * Webhooks
 * This endpoint allows the client to retrieve a list of webhooks they have previously registered.  \"Webhooks\" are used to register HTTP endpoints that will be called once a relevant event is triggered inside the web application, events like `article_created`, `article_updated`.  It will return all webhooks, without pagination. 
 *
 * returns List
 **/
exports.webhooksGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "target_url" : "http://example.com/aeiou",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "id" : 0,
  "source" : "source",
  "events" : [ "events", "events" ]
}, {
  "target_url" : "http://example.com/aeiou",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "id" : 0,
  "source" : "source",
  "events" : [ "events", "events" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * A webhook endpoint
 * This endpoint allows the client to delete a single webhook given its `id`. 
 *
 * id Integer Id of the webhook
 * no response value expected for this operation
 **/
exports.webhooksIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * A webhook endpoint
 * This endpoint allows the client to retrieve a single webhook given its `id`. 
 *
 * id Integer Id of the webhook
 * returns WebhookShow
 **/
exports.webhooksIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "target_url" : "http://example.com/aeiou",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "id" : 0,
  "source" : "source",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "events" : [ "events", "events" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new webhook
 * This endpoint allows the client to create a new webhook.  \"Webhooks\" are used to register HTTP endpoints that will be called once a relevant event is triggered inside the web application, events like `article_created`, `article_updated`. 
 *
 * body WebhookCreate Webhook to create (optional)
 * returns WebhookShow
 **/
exports.webhooksPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "target_url" : "http://example.com/aeiou",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "id" : 0,
  "source" : "source",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "events" : [ "events", "events" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

