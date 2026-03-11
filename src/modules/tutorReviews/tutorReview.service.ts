import { Review } from "../../../generated/prisma/client"
import { prisma } from "../../../lib/prisma"

const postTutorReview = async(student: any, payload: any) => {
    const data = await prisma.review.findMany({
        where: {
            studentId: student.id, 
            tutorProfileId: payload?.tutorProfileId
        }
    })


    if(data.length !== 0) {
        return {
            message: "You already gave review"
        }
    }
    await prisma.tutorProfile.update({
        where: {
            id: payload.tutorProfileId
        }, 
        data: {
            ratingSum: {increment: payload.rating}, 
            ratingCount: {increment: 1}
        }
    })
    return {
        message: "Review Submitted", 
        result: await prisma.review.create({
        data: {
            content: payload.content, 
            tutorProfileId: payload.tutorProfileId, 
            studentUserId: student.id
        }
    })
    }
}

const getTutorReview = async (id: string) => {
    return await prisma.review.findMany({
        where: {
            tutorProfileId: id || ""
        }, 
        include: {
            tutorProfile: true
        }
    })
}

export const tutorReviewServices = {
    postTutorReview, 
    getTutorReview
}