import { Request, Response } from "express"
import { tutorServices } from "./tutorProfile.service"
import { ErrorFunc } from "../../utils/ErrorFunc"

const getTutor = async(req: Request, res: Response) => {
    res.send("SIUU")
}

const postTutorProfile = async(req: Request, res: Response) => {
    try {
        const result = await tutorServices.postTutorProfile(req.user, req.body);
        res.send(result);
    } catch(error: any) {
        ErrorFunc(res, 403, error.message)
    }
}

export const tutorProfileController = {
    getTutor, 
    postTutorProfile
}
