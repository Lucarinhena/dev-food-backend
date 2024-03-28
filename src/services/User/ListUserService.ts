import { prismaClient } from "../../prisma";

export class ListUserService {
  async executable() {
    const users = await prismaClient.user.findMany();
    return users;
  }
}