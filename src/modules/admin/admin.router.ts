import { Router } from "express";
import { adminController } from "./admin.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

router.get("/get-all-user",authMiddleware("admin"), adminController.getAllUser);
router.put("/ban-user", authMiddleware("admin"), adminController.banUser);
router.get("/view-all-bookings", authMiddleware("admin"), adminController.getAllBookings)

export const adminRouter = router;