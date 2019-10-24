'use strict';


/**
 * Published articles
 * This endpoint allows the client to retrieve a list of articles.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  By default it will return featured, published articles ordered by descending popularity.  Each page will contain `30` articles.  Responses, according to the combination of params, are cached for 24 hours. 
 *
 * page Integer Pagination page.  This param can be used in conjuction with all other params (except when asking for fresh and rising articles by themselves).  (optional)
 * tag String Adding this parameter will return articles that contain the requested tag.  This param can be used by itself, with `page` or with `top`.  (optional)
 * username String Adding this parameter will return articles belonging to a User or Organization ordered by descending `published_at`.  If `state=all` the number of items returned will be `1000` instead of the default `30`.  This param can be used by itself or only with `page` and `state`.  (optional)
 * state String Adding this will allow the client to check which articles are fresh or rising.  If `state=fresh` the server will return published fresh articles. If `state=rising` the server will return published rising articles.  This param can only be used by itself or with `username` if set to `all`.  (optional)
 * top Integer Adding this will allow the client to return the most popular articles in the last `N` days.  `top` indicates the number of days since publication of the articles returned.  This param can only be used by itself or with `tag`.  (optional)
 * returns List
 **/
exports.articlesGET = function(page,tag,username,state,top) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 6,
  "tag_list" : [ "tag_list", "tag_list" ],
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
}, {
  "description" : "description",
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 6,
  "tag_list" : [ "tag_list", "tag_list" ],
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * A published article
 * This endpoint allows the client to retrieve a single published article given its `id`.  Responses are cached for 5 minutes. 
 *
 * id Integer Id of the article
 * returns ArticleShow
 **/
exports.articlesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "body_html" : "body_html",
  "readable_publish_date" : "readable_publish_date",
  "description" : "description",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "url" : "http://example.com/aeiou",
  "tags" : [ "tags", "tags" ],
  "social_image" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "body_markdown" : "body_markdown",
  "tag_list" : "tag_list",
  "comments_count" : 6,
  "last_comment_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "edited_at" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "crossposted_at" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing article
 * This endpoint allows the client to updated an existing article.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  ### Rate limiting  There are no limits on the amount of updates.  ### Additional resources  - [Rails tests for Articles API](https://github.com/thepracticaldev/dev.to/blob/master/spec/requests/api/v0/articles_spec.rb) 
 *
 * id Integer Id of the article
 * body ArticleUpdate Article params to update.

*Note: if the article contains a front matter in its body, its front
matter properties will still take precedence over any JSON equivalent
params, which means that the full body_markdown with the modified
front matter params needs to be provided for an update to be successful*
 (optional)
 * returns ArticleShow
 **/
exports.articlesIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "body_html" : "body_html",
  "readable_publish_date" : "readable_publish_date",
  "description" : "description",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "url" : "http://example.com/aeiou",
  "tags" : [ "tags", "tags" ],
  "social_image" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "body_markdown" : "body_markdown",
  "tag_list" : "tag_list",
  "comments_count" : 6,
  "last_comment_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "edited_at" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "crossposted_at" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Authenticated user's all articles
 * This endpoint allows the client to retrieve a list of its articles.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  It will return both published and unpublished articles with pagination.  Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.  By default a page will contain `30` articles. 
 *
 * page Integer Pagination page. (optional)
 * per_page Integer Page size (defaults to 30 with a maximum of 1000). (optional)
 * returns List
 **/
exports.articlesMeAllGET = function(page,per_page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
}, {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Authenticated user's articles
 * This endpoint allows the client to retrieve a list of its published articles.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Published articles will be in reverse chronological publication order.  It will return published articles with pagination. By default a page will contain `30` articles. 
 *
 * page Integer Pagination page. (optional)
 * per_page Integer Page size (defaults to 30 with a maximum of 1000). (optional)
 * returns List
 **/
exports.articlesMeGET = function(page,per_page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
}, {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Authenticated user's published articles
 * This endpoint allows the client to retrieve a list of its published articles.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Published articles will be in reverse chronological publication order.  It will return published articles with pagination. By default a page will contain `30` articles. 
 *
 * page Integer Pagination page. (optional)
 * per_page Integer Page size (defaults to 30 with a maximum of 1000). (optional)
 * returns List
 **/
exports.articlesMePublishedGET = function(page,per_page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
}, {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Authenticated user's unpublished articles
 * This endpoint allows the client to retrieve a list of its unpublished articles.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Unpublished articles will be in reverse chronological creation order.  It will return unpublished articles with pagination. By default a page will contain `30` articles. 
 *
 * page Integer Pagination page. (optional)
 * per_page Integer Page size (defaults to 30 with a maximum of 1000). (optional)
 * returns List
 **/
exports.articlesMeUnpublishedGET = function(page,per_page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
}, {
  "description" : "description",
  "published" : true,
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "flare_tag" : {
    "text_color_hex" : "text_color_hex",
    "name" : "name",
    "bg_color_hex" : "bg_color_hex"
  },
  "url" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "tag_list" : [ "tag_list", "tag_list" ],
  "comments_count" : 6,
  "organization" : {
    "profile_image" : "http://example.com/aeiou",
    "name" : "name",
    "slug" : "slug",
    "profile_image_90" : "http://example.com/aeiou",
    "username" : "username"
  },
  "type_of" : "type_of",
  "page_views_count" : 5,
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "published_timestamp" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new article
 * This endpoint allows the client to create a new article.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  ### Rate limiting  There is a limit of 10 articles created each 30 seconds by the same user.  ### Additional resources  - [Rails tests for Articles API](https://github.com/thepracticaldev/dev.to/blob/master/spec/requests/api/v0/articles_spec.rb) 
 *
 * body ArticleCreate Article to create (optional)
 * returns ArticleShow
 **/
exports.articlesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "body_html" : "body_html",
  "readable_publish_date" : "readable_publish_date",
  "description" : "description",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "title" : "title",
  "canonical_url" : "http://example.com/aeiou",
  "url" : "http://example.com/aeiou",
  "tags" : [ "tags", "tags" ],
  "social_image" : "http://example.com/aeiou",
  "path" : "path",
  "positive_reactions_count" : 1,
  "body_markdown" : "body_markdown",
  "tag_list" : "tag_list",
  "comments_count" : 6,
  "last_comment_at" : "2000-01-23T04:56:07.000+00:00",
  "type_of" : "type_of",
  "edited_at" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "cover_image" : "http://example.com/aeiou",
  "published_at" : "2000-01-23T04:56:07.000+00:00",
  "crossposted_at" : "2000-01-23T04:56:07.000+00:00",
  "user" : {
    "profile_image" : "profile_image",
    "website_url" : "http://example.com/aeiou",
    "name" : "name",
    "twitter_username" : "twitter_username",
    "github_username" : "github_username",
    "profile_image_90" : "profile_image_90",
    "username" : "username"
  },
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

