import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/Orders/DeleteOrderService";

export class DeleteOrderController {
  async handle(req: Request, res: Response) {
    try {
        const order_id = req.query.order_id as string;
    const deleteOrder = new DeleteOrderService();
    const order = await deleteOrder.execute({ order_id });

    return res.status(201).json('Pedido deletado com sucesso!')
    } catch (error) {
        return res.status(500).json({ error: "Erro ao deletar o pedido." });
    }
    
  }
}
