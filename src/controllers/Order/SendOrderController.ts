import { SendOrderService } from "../../services/Orders/SendOrderService";
import { Request, Response } from "express";

export class SendOrderController {
  async handle(req: Request, res: Response) {
    try {
      const { order_id } = req.body;
      const sendOrderService = new SendOrderService();
      const order = await sendOrderService.execute({ order_id });
      return res.json(order);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
