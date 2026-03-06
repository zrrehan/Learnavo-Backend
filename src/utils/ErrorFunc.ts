import { Response } from "express";

const errorMssg = (error: any) => {
    let message = "";
    if(error?.code === "P2025") {
        message = "Invalid input"
    }

    if(message === "") {
        message = error.message
    }

    return message;
}

export function ErrorFunc(res: Response, status: number, error: any) {
    return res.status(status).send({
        success: false,
        message: errorMssg(error)
    });
}