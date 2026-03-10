import { Request, Response } from "express"
import { ErrorFunc } from "../../utils/ErrorFunc"
import { publicServices } from "./public.service";

const getDetailedTutorProfile = async (req: Request, res: Response) => {
    try {
        const result = await publicServices.getDetailedTutorProfile(); 
        res.send(result);
    } catch(error) {
        ErrorFunc(res, 400, error);
    }
}

export const publicController = {
    getDetailedTutorProfile,
}