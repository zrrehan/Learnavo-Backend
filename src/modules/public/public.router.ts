import { Router } from "express";
import { publicController } from "./public.controller";

const router = Router();

router.get("/tutor-profile-views", publicController.getDetailedTutorProfile);
router.post("/tutor-browse", publicController.tutorBrowse);

export const publicRouter = router;