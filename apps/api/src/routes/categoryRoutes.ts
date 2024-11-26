import { Router } from "express";
import { getCategories } from "@/controllers/categoriesController";

const router: Router = Router();

router.get("/", getCategories);

export default router;
