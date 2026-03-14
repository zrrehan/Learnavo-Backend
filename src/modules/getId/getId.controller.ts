import { Request, Response } from "express";
import { getIdServices } from "./getId.service";

const getUserToStudentProfileId = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;    
        const result = await getIdServices.getUserToStudentProfileId(userId as string || "");
        return res.status(200).send({
            success: true, 
            result: result
        });
    } catch(error: any) {
        res.status(400).send({
            success: false, 
            message: error.message || "Failed to get student profile id"
        });
    }   
}

const getUserToTutorProfileId = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;      
        console.log(userId, "siu")       
        const result = await getIdServices.getUserToTutorProfileId(userId as string || "");
        return res.status(200).send({
            success: true, 
            result: result
        });
    } catch(error: any) {
        res.status(400).send({
            success: false,     
            message: error.message || "Failed to get tutor profile id"
        });
    }   
}

export const getIdController = {
    getUserToStudentProfileId, 
    getUserToTutorProfileId
}