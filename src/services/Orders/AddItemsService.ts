import { prismaClient } from "../../prisma";

interface ItemRequest {
  order_Id: string;
  product_Id: string;
  amount: number;
}

export class AddItemsService {
  async execute({ order_Id, product_Id, amount }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        order_Id: order_Id,
        product_Id: product_Id,
        amount: amount,
      },
    });
    return order;
  }
}
