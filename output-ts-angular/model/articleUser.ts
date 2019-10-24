/**
 * DEV API
 * Access DEV articles, comments and other resources via API  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 0.5.7
 * Contact: yo@dev.to
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * The article's creator
 */
export interface ArticleUser { 
    name?: string;
    username?: string;
    twitterUsername?: string;
    githubUsername?: string;
    websiteUrl?: string;
    /**
     * Profile image (640x640)
     */
    profileImage?: string;
    /**
     * Profile image (90x90)
     */
    profileImage90?: string;
}