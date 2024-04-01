import { ListCategoryService } from "../../services/Category/ListCategoryService";
import { Request, Response } from "express";

export class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();

    try {
      const result = await listCategoryService.execute();

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  }
}
