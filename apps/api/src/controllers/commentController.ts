import type { Request, Response } from "express";
import db from "@repo/database/client";
import { commentSchema } from "@repo/types";

export const getCommentsByPostId = async (req: Request, res: Response) => {
  const { postId } = req.params;
  const comments = await db.comment.findMany({ where: { postId } });
  res.status(200).json(comments);
};

export const createComment = async (req: Request, res: Response) => {
  const { success, data, error } = commentSchema.safeParse(req.body);

  if (!success || !data) {
    res.status(400).json({ message: error.flatten().fieldErrors });
    return;
  }

  try {
    const comment = await db.comment.create({
      data: { ...data, userId: "1" },
    });

    if (!comment) {
      res.status(400).json({ message: "Error al crear el comentario" });
      return;
    }

    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: "Error al crear el post" });
  }
};
