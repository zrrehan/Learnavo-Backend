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
        ErrorFunc(res, 403, error)
    }
}

const updateProfile = async(req: Request, res: Response) => {
    try {
        const {profileId, updateData} = req.body;
        const result = await tutorServices.updateTime(profileId, updateData)
        res.send(result);
    } catch (error: any) {
        ErrorFunc(res, 400, error);
    }
}

const deleteTime = async(req: Request, res: Response) => {
    try {
        const result = await tutorServices.deleteTime(req.body.id as string);
        res.send(result);
    } catch(error: any) {
        ErrorFunc(res, 403, error)
    }
}


export const tutorProfileController = {
    getTutor, 
    postTutorProfile, 
    deleteTime,
    updateProfile
}
