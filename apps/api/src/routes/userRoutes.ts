import { getAppUser } from "@/controllers/usersController";
import { Router } from "express";

const router: Router = Router();

router.get("/me", getAppUser);

export default router;
