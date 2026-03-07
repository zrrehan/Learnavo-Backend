import { Review } from "../../../generated/prisma/client"
import { prisma } from "../../../lib/prisma"

const postTutorReview = async(payload: any) => {
    const data = await prisma.review.findMany({
        where: {
            studentId: payload?.studentId
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
            studentId: payload.studentId
        }
    })
    }
}

export const tutorReviewServices = {
    postTutorReview
}