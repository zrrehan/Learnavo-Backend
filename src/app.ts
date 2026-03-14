import express, { Request, Response } from 'express';
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { tutorProfileRouter } from './modules/tutorProfile/tutorProfile.router';
import { auth } from '../lib/auth';
import { tutorSessionBookRouter } from './modules/tutoringSessionBook/tutoringSessionBook.router';
import { tutorReviewRouter } from './modules/tutorReviews/tutorReview.router';
import { adminRouter } from './modules/admin/admin.router';
import { publicRouter } from './modules/public/public.router';
import { getIdRouter } from './modules/getId/getId.router';

export const app = express();
export const port = process.env.PORT;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

// ✅ Handle preflight OPTIONS globally FIRST — before any route handler
// app.options("*", cors(corsOptions));

// ✅ Apply CORS globally
app.use(cors(corsOptions));

app.use(express.json());

// ✅ Now register better-auth handler AFTER cors middleware
app.use("/api/auth", toNodeHandler(auth, { cors: false }));

app.use("/tutor-profile", tutorProfileRouter);
app.use("/book-session", tutorSessionBookRouter);
app.use("/tutor-review", tutorReviewRouter);
app.use("/admin-features", adminRouter);
app.use("/public-features", publicRouter);
app.use("/get-id", getIdRouter);
app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Learnavo server is running with it's full power"
    });
});