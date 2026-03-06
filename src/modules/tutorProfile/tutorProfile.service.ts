import { prisma } from "../../../lib/prisma"
import { AvailableTimeType, PostTutorProfilePayload } from "../../types/tutorProfile.type"



const postTutorProfile = async (payload: PostTutorProfilePayload) => {
    const profile = await prisma.tutorProfile.create({
        data: {
            ratingSum: 0, 
            ratingCount: 0, 
            userId: payload.userId
        }
    })

    let availableTimeData = payload.availableTime.map((singleTime: AvailableTimeType) => {
        return {
            ...singleTime, 
            tutorProfileId: profile.id
        }
    })
    const availableTime = await prisma.availableTime.createMany({
        data: availableTimeData, 
        skipDuplicates: true
    })

    return {
        ...profile, 
        ...availableTime
    }
}

export const tutorServices = {
    postTutorProfile
}