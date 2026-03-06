import {  Router } from "express";
import { tutorProfileController } from "./tutorProfile.controller";

const router = Router();

router.get("/get-profile", tutorProfileController.getTutor)
router.post("/post-profile", tutorProfileController.postTutorProfile)

export const tutorProfileRouter = router; 