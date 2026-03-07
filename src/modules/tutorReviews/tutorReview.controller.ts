import { Request, Response } from "express";
import { ErrorFunc } from "../../utils/ErrorFunc";
import { tutorReviewServices } from "./tutorReview.service";

const postTutorReview = async(req: Request, res: Response) => {
    try {
        const result = await tutorReviewServices.postTutorReview(req.body);
        res.status(201).send({
            success: true, 
            result: result
        });
    } catch(error: any) {
        ErrorFunc(res, 400, error);
    }
}


const getTutorReview = async(req: Request, res: Response) => {
    try {
        const {id} = req.query;
        const result = await tutorReviewServices.getTutorReview(id as string);
        res.status(201).send({
            success: true, 
            result: result
        });
    } catch(error: any) {
        ErrorFunc(res, 400, error);
    }
}

export const tutorReviewController = {
    postTutorReview, 
    getTutorReview
}