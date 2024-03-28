import { Request, Response } from "express";
import { ListUserService } from "../../services/User/ListUserService";

export class ListUserController {
  async handle(req: Request, res: Response) {
    try {
      const listUserService = new ListUserService();

      const users = await listUserService.executable();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao listar os usuários." });
    }
  }
}
