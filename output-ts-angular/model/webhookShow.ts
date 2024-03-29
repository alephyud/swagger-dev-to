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
 */import { ArticleUser } from './articleUser';


/**
 * Webhook
 */
export interface WebhookShow { 
    _typeOf?: string;
    id?: number;
    /**
     * The name of the requester, eg. \"DEV\"
     */
    source?: string;
    targetUrl?: string;
    /**
     * An array of events identifiers
     */
    events?: Array<string>;
    createdAt?: Date;
    user?: any;
}