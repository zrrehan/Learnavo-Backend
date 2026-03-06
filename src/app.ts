import express, { Request, Response } from 'express';
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { tutorProfileRouter } from './modules/tutorProfile/tutorProfile.router';
import { auth } from '../lib/auth';
export const app = express()
export const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/tutor-profile", tutorProfileRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true, 
        message: "Learnavo server is running with it's full power"
    })
})