import { prismaClient } from "../../prisma";

export class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
    });
    return orders;
  }
}
