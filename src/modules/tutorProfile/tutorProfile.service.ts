import { User } from "../../../generated/prisma/client"
import { prisma } from "../../../lib/prisma"
import { AvailableTimeType, PostTutorProfilePayload } from "../../types/tutorProfile.type"



const postTutorProfile = async (user: any, payload: PostTutorProfilePayload) => {
    const profile = await prisma.tutorProfile.create({
        data: {
            ratingSum: 0, 
            ratingCount: 0, 
            userId: user.id
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
        success: true, 
        data: {
            ...profile, 
            totalAvilableTime: availableTime.count
        }
    }
}

const deleteTime = async(id: string) => {
    return {
        success: true, 
        deletedData: await prisma.availableTime.delete({
            where: {
                id: id
            }
        })
    }
}

export const tutorServices = {
    postTutorProfile, 
    deleteTime,
}