export * from './articles.service';
import { ArticlesService } from './articles.service';
export * from './webhooks.service';
import { WebhooksService } from './webhooks.service';
export const APIS = [ArticlesService, WebhooksService];
