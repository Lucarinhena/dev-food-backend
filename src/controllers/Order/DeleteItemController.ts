import { Request, Response } from "express";
import { DeleteItemService } from "../../services/Orders/DeleteItemService";

export class DeleteItemController {
  async handle(req: Request, res: Response) {
    try {
      const item_id = req.query.item_id as string;
      const deleteItemService = new DeleteItemService();
      const order = await deleteItemService.execute({ item_id });
      return res.json(order);
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  }
}
