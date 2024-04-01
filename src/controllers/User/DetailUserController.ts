import { Request, Response } from "express";
import { DetailUserService } from "../../services/User/DetailUserService";

export class DetailUserController {
  async handle(req: Request, res: Response) {
    try {
      const user_id = req.user_id
      const listUserService = new DetailUserService();

      const users = await listUserService.execute(user_id);
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao listar os usuários." });
    }
  }
}
