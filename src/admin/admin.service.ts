import { prisma } from "../../lib/prisma"

const getAllUser = async () => {
    return prisma.user.findMany();
}

export const adminServices = {
    getAllUser
}