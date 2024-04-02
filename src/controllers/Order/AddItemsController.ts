import { Request, Response } from "express";
import { AddItemsService } from "../../services/Orders/AddItemsService";

export class AddItemsController {
  async handle(req: Request, res: Response) {
    try {
      const { order_Id, product_Id, amount } = req.body;
      const addItems = new AddItemsService();
      const order = await addItems.execute({ order_Id, product_Id, amount });

      return res.status(201).json(order);
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  }
}
