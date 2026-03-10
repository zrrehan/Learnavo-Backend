import { Request, Response } from "express";
import { adminServices } from "./admin.service";
import { ErrorFunc } from "../utils/ErrorFunc";

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await adminServices.getAllUser();
        res.send(result);
    } catch(error: any) {
        ErrorFunc(res, 400, error);
    }
}

export const adminController = {
    getAllUser
}