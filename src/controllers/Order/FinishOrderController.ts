import { Request, Response } from "express";
import { FinishOrderService } from "../../services/Orders/FinishOrderService";

export class FinishOrderController {
  async handle(req: Request, res: Response) {
    try {
      const { order_id } = req.body;
      const finishOrderService = new FinishOrderService();
      const order = await finishOrderService.execute({ order_id });
      return res.json(order);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
