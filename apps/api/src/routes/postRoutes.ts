import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostBySlug,
} from "@/controllers/postsController";

const router: Router = Router();

router.get("/", getPosts);
router.get("/:slug", getPostBySlug);
router.post("/", createPost);

export default router;
