import { Request, Response } from "express";
import { DetailOrderService } from "../../services/Orders/DetailOrderService";

export class DetailOrderController {
  async handle(req: Request, res: Response) {
    try {
      const order_id = req.query.order_id as string;
      const detailOrder = new DetailOrderService();
      const orders = await detailOrder.execute({ order_id });
      return res.json(orders);
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  }
}
