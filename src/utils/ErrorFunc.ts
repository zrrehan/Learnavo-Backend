import { Response } from "express";

export function ErrorFunc(res: Response, status: number, message: string) {
    return res.status(status).send({
        success: false,
        message: message
    });
}