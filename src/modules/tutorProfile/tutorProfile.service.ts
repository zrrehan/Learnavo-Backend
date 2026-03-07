import { User } from "../../../generated/prisma/client"
import { prisma } from "../../../lib/prisma"
import { AvailableTimeType, PostTutorProfilePayload } from "../../types/tutorProfile.type"



const postTutorProfile = async (user: any, payload: PostTutorProfilePayload) => {
    const oldProfile = await prisma.tutorProfile.findUnique({
        where: {
            userId: user.id
        }
    })

    if(oldProfile) {
        throw new Error("Tutor profile already do exist");
    }
    
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


const updateTime = async(tutorProfileId: string, payload: any) => {
    let availableTimeData = payload.map((singleTime: AvailableTimeType) => {
        return {
            ...singleTime, 
            tutorProfileId: tutorProfileId
        }
    })
    console.log(availableTimeData)
    
    const availableTime = await prisma.availableTime.createMany({
        data: availableTimeData, 
        skipDuplicates: true
    })

    return availableTime;
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
    updateTime,
}