import express, { Request, Response } from 'express';
import cors from "cors"
import { tutorProfileRouter } from './modules/tutorProfile/tutorProfile.router';
export const app = express()
export const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/tutor-profile", tutorProfileRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true, 
        message: "Learnavo server is running with it's full power"
    })
})