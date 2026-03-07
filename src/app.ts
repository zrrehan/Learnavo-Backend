import express, { Request, Response } from 'express';
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
import { tutorProfileRouter } from './modules/tutorProfile/tutorProfile.router';
import { auth } from '../lib/auth';
import { tutorSessionBookRouter } from './modules/tutoringSessionBook/tutoringSessionBook.router';
export const app = express()
export const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/tutor-profile", tutorProfileRouter)
app.use("/book-session", tutorSessionBookRouter);

app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true, 
        message: "Learnavo server is running with it's full power"
    })
})