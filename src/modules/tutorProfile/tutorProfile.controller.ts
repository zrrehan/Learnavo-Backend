import { Request, Response } from "express"
import { tutorServices } from "./tutorProfile.service"

const getTutor = async(req: Request, res: Response) => {
    res.send("SIUU")
}

const postTutorProfile = async(req: Request, res: Response) => {
    try {
        const result = await tutorServices.postTutorProfile(req.body);
        res.send(result);
    } catch(error) {
        res.send({
            error: error
        })
    }
}

export const tutorProfileController = {
    getTutor, 
    postTutorProfile
}
