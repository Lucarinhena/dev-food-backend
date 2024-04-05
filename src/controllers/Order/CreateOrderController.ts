import { Request, Response } from "express";
import { CreateOrderService } from "../../services/Orders/CreateOrderService";

export class CreateOrderController {
  async handle(req: Request, res: Response) {
    try {
      const { table, name } = req.body;

      const createOrderService = new CreateOrderService();
      const order = await createOrderService.execute({ table, name });

      return res.json(order);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
