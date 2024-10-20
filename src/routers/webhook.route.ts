import * as express from 'express';
import { WebhookController } from '../controller/webhook.controller';

export const webhookRouter = express.Router();
webhookRouter.post('/webhook/:channelId', WebhookController.webhookExample);

export default webhookRouter;
