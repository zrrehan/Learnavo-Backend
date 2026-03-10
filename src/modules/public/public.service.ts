import { prisma } from "../../../lib/prisma"

const getDetailedTutorProfile = async () => {
    return await prisma.tutorProfile.findMany({
        include: {
            user: true
        }
    });
}

export const publicServices = {
    getDetailedTutorProfile
}