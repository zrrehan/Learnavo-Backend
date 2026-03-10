import { Router } from "express";
import { adminController } from "./admin.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/get-all-user",authMiddleware("admin"), adminController.getAllUser);

export const adminRouter = router;