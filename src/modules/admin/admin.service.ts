import { prisma } from "../../../lib/prisma"

const getAllUser = async () => {
    return prisma.user.findMany();
}

const banUser = async(userId: string, isBan: boolean) => {
    return prisma.user.update({
        where: {
            id: userId
        }, 
        data: {
            isBan: isBan
        }
    })
}

const getAllBookings = async() => {
    return prisma.tuitionSession.findMany({
        include: {
            tutorProfile: {
                include: {
                    user: true
                }
            }, 
            studentProfile: {
                include: {
                    user: true
                }
            },
        }
    });
}

export const adminServices = {
    getAllUser, 
    banUser, 
    getAllBookings
}