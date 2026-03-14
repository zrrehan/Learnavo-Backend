import { prisma } from "../../../lib/prisma"

const getUserToStudentProfileId = async(userId: string) => {
    return await prisma.studentProfile.findUnique({
        where: {
            userId: userId
        },
    })
}


const getUserToTutorProfileId = async(userId: string) => {
    return await prisma.tutorProfile.findUnique({
        where: {
            userId: userId  
        }
    })
}

export const getIdServices = {
    getUserToStudentProfileId, 
    getUserToTutorProfileId,
}