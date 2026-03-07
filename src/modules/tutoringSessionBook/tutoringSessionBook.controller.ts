import { Request, Response } from "express";
import { tutoringSessionBookService } from "./tutoringSessionBook.service";
import { ErrorFunc } from "../../utils/ErrorFunc";

const studentBookSession = async (req: Request, res: Response) => {
    try {
        const result = await tutoringSessionBookService.studentBookSession(req.body);
        res.status(201).send({
            success: true, 
            result: result
        })
    } catch(error: any) {
        ErrorFunc(res, 400, error)
    }
}

const studentCreateProfile = async (req: Request, res: Response) => {
    try {
        const result = await tutoringSessionBookService.studentCreateProfile(req.body);
        res.status(201).send({
            success: true, 
            result: result
        })
    } catch(error: any) {
        ErrorFunc(res, 400, error)
    }
}

const getTuitionSession = async(req: Request, res: Response) => {
    try {
        const result = await tutoringSessionBookService.getTuitionSession(req?.user?.role as string, req?.user?.id as string);
        res.send(result);
    } catch(error: any) {
        ErrorFunc(res, 400, error)
    }
}

export const tutoringSessionBookController = {
    studentBookSession, 
    studentCreateProfile,
    getTuitionSession
}