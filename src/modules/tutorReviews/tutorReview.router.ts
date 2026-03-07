import { Router } from "express";
import { tutorReviewController } from "./tutorReview.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router()

router.get("/", (req: any, res: any) => {
    res.send(200)
})

router.post("/post-review", authMiddleware("student"), tutorReviewController.postTutorReview);
router.get("/get-reviews", tutorReviewController.getTutorReview)
export const tutorReviewRouter = router;