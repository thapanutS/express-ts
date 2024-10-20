export class WebhookService {
  static async webhookExample(name: string): Promise<string> {
    return `Hello ${name}!`;
  }
}
