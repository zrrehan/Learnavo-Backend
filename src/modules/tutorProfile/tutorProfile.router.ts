import {  Router } from "express";
import { tutorProfileController } from "./tutorProfile.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { UserRoles } from "../../types/roles";

const router = Router();

router.get("/get-profile", tutorProfileController.getTutor)
router.post("/post-profile", authMiddleware(UserRoles.tutor), tutorProfileController.postTutorProfile)

export const tutorProfileRouter = router; 