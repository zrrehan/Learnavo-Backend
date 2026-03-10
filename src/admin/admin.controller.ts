import { Request, Response } from "express";
import { adminServices } from "./admin.service";
import { ErrorFunc } from "../utils/ErrorFunc";

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await adminServices.getAllUser();
        res.status(200).send({
            success: true, 
            result: result
        })
    } catch(error: any) {
        ErrorFunc(res, 400, error);
    }
}

const banUser = async(req: Request, res: Response) => {
    try {
        const {id, isBan} = req.body;
        const result = await adminServices.banUser(id as string || "", isBan)
        res.status(201).send({
            success: true, 
            result: result
        });
    } catch(error: any) {
        ErrorFunc(res, 400, error);
    }
}

export const adminController = {
    getAllUser, 
    banUser
}