import { gte } from "better-auth";
import { prisma } from "../../../lib/prisma"

const getDetailedTutorProfile = async (featured: boolean) => {
    let whereObj = {}
    if(featured) {
        whereObj = {
            featured: true
        }
    }

    
    return await prisma.tutorProfile.findMany({
        include: {
            user: true, 
            reviews: true,
        }, 
        where: {
            ...whereObj
        }
    });


}

const tutorBrowse = async (input: any) => {
    let whereQueryObject = {} 

    Object.keys(input).forEach(key => {
        // console.log(key, "=>", input[key])
        // console.log(typeof key, key === "subject");
        if(input[key]) {
            if(key == "category") {
                whereQueryObject = {
                    ...whereQueryObject, 
                    [key]: input[key]
                }
            }

            if(key == "subjects") {
                console.log("SIU")
                whereQueryObject = {
                    ...whereQueryObject, 
                    [key]: {
                        "hasSome": input[key]
                    }
                }
            }
        }
    })

    if(input.lowerPrice && input.higherPrice) {
        whereQueryObject = {
            ...whereQueryObject, 
            price: {
                gte: Number(input.lowerPrice),
                lte: Number(input.higherPrice)
            }
        }
    }

    let result: any;
    if(input.lowerRating && input.higherRating) {
        const allProfile = await prisma.tutorProfile.findMany({
            where: {
                AND: [whereQueryObject]
            }, 
            include: {
                user: true
            } 
        });

        console.log("all-profile", allProfile);
        const selectedProfile = allProfile.filter(singleProfile => {
            return Number(input.lowerRating) <= Number(singleProfile.ratingSum / singleProfile.ratingCount) 
            && Number(singleProfile.ratingSum / singleProfile.ratingCount) <= Number(input.higherRating)
        })

        result = selectedProfile
    } else {
        result = await prisma.tutorProfile.findMany({
            where: {
                AND: [whereQueryObject]
            }, 
            include: {
                user: true, 
                reviews: true,
            }
        });
    } 

    console.log(whereQueryObject);
    return result
}  

export const publicServices = {
    getDetailedTutorProfile, 
    tutorBrowse
}