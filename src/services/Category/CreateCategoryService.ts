import { prismaClient } from "../../prisma";

interface CategoryRequest {
    name: string
}

export class CreateCategoryService {
    async execute({name}: CategoryRequest) {
        if (name === ""){
            throw new Error ("Please, create a valid category name")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return category
    }
}