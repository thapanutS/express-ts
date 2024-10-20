import { Request, Response, NextFunction } from "express";
import { WebhookService } from "../services/webhook.service";

export class WebhookController {
  static webhookExample = (req: Request, res: Response) => {
    const name = req.params.name;
    const greetingMessage = WebhookService.webhookExample(name);
    console.log(greetingMessage);
  };
}
