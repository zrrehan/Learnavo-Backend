import { Response } from "express";

const errorMssg = (error: any) => {
    let message = "";
    if(error?.code === "P2025" || error?.code === "P2003") {
        message = "Invalid input"
    }

    if(error?.code === "P2002") {
        message = "Duplicate Value";
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