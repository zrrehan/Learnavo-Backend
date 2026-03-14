import { Router } from "express";
import { getIdController } from "./getId.controller";


const router = Router();

router.post("/student-user-to-profileid", getIdController.getUserToStudentProfileId)
router.post("/tutor-user-to-profileid", getIdController.getUserToTutorProfileId)



export const getIdRouter = router;