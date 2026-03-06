import { NextFunction, Request, Response } from "express";
import { auth } from "../../lib/auth";
import { UserRoles } from "../types/roles";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                name: string, 
                email: string, 
                image: string, 
                role: UserRoles
            }
        }
    }
}

export function authMiddleware(...roles: String[]) {
    return async(req: Request, res: Response, next: NextFunction) => {
        const session = await auth.api.getSession({
            headers: req.headers as any
        })
        if(!session) {
            res.status(403).send({
                success: false, 
                message: "You are not authenticated! Please log in"
            })
        }

        req.user = {
            id: session?.user.id as string,
            name: session?.user.name as string,
            email: session?.user.email as string,
            image: session?.user.image as string,
            role: session?.user.roles as UserRoles,
        }

        if(!roles.includes(req.user.role)) {
            res.status(403).send({
                success: false, 
                message: "You are not authorized!"
            })
        }

        next();
    }
}