import { Router } from "express";
import { tutoringSessionBookController } from "./tutoringSessionBook.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

// router.get("/", )
router.post("/book-session", authMiddleware("student"), tutoringSessionBookController.studentBookSession);
router.post("/create-student-profile",authMiddleware("student") ,tutoringSessionBookController.studentCreateProfile);
router.get("/get-tuition-sessions", authMiddleware("student", "teacher"), tutoringSessionBookController.getTuitionSession);
export const tutorSessionBookRouter = router;