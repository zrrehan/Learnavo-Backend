import { Request, Response } from "express"
import { ErrorFunc } from "../../utils/ErrorFunc"
import { publicServices } from "./public.service";

const getDetailedTutorProfile = async (req: Request, res: Response) => {
    try {
        const {featured} = req.query;
        const result = await publicServices.getDetailedTutorProfile(Boolean(featured) || false); 
        res.send({
            status: true, 
            result: result
        });
    } catch(error) {
        ErrorFunc(res, 400, error);
    }
}

const tutorBrowse = async(req: Request, res: Response) => {
    try {
        const input = {
            subjects:  req?.body?.subjects || null,
            lowerRating:  req?.body?.lowerRating || null,
            higherRating: req?.body?.higherRating || null,
            lowerPrice: req?.body?.lowerPrice || null,
            higherPrice: req?.body?.higherPrice || null,
            category: req?.body?.category || null,
        }
        const result = await publicServices.tutorBrowse(input);
        res.send({
            status: true, 
            result: result
        });
    } catch(error) {
        // ErrorFunc(res, 400, error);
        console.log(error)
        res.send(error);
    }
}



export const publicController = {
    getDetailedTutorProfile,
    tutorBrowse, 

}