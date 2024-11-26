import { Router } from "express";
import {
  createComment,
  getCommentsByPostId,
} from "@/controllers/commentController";

const router: Router = Router();

router.get("/:postId", getCommentsByPostId);
router.post("/", createComment);

export default router;
