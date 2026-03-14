import { prisma } from "../../../lib/prisma"

const studentBookSession = async (payload: any) => {
    console.log(payload)
    const bookedSession = await prisma.tuitionSession.create({
        data: payload
    })

    return bookedSession
}

const studentCreateProfile = async(payload: any) => {
    const createdProfile = await prisma.studentProfile.create({
        data: {
            userId: payload.userId
        }
    })
    return createdProfile
}


const getTuitionSession = async (role: string, id: string) => {
    if(role === "student") {
        const result = await prisma.studentProfile.findUnique({
            where: {
                userId: id
            }
        })

        return await prisma.tuitionSession.findMany({
            where: {
                studentId: result?.id || ""
            }, 
            include: {
                tutorProfile: {
                    include: {
                        user: true
                    }
                }
            }
        })
    } else if(role === "tutor") {
        const result = await prisma.tutorProfile.findUnique({
            where: {
                userId: id
            }
        })

        return await prisma.tuitionSession.findMany({
            where: {
                tutorId: result?.id || ""
            }, 
            include: {
                studentProfile: {
                    include: {
                        user: true
                    }
                }
            }
        })
    }
}

const markCompleteSession = async(sessionId: string) => {
    return await prisma.tuitionSession.update({
        where: {
            id: sessionId
        }, 
        data: {
            completed: true
        }
    })
}

export const tutoringSessionBookService = {
    studentBookSession, 
    studentCreateProfile, 
    getTuitionSession, 
    markCompleteSession,
}