import { prismaClient } from "../../prisma";

export class DetailUserService {
  async execute(user_id: string) {
    const users = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return users;
  }
}
