import { Router } from "express";
import { tutorReviewController } from "./tutorReview.controller";

const router = Router()

router.get("/", (req: any, res: any) => {
    res.send(200)
})

router.post("/post-review", tutorReviewController.postTutorReview);

export const tutorReviewRouter = router;