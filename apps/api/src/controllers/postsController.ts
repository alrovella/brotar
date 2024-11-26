import type { Request, Response } from "express";
import db from "@repo/database/client";
import { generateSlug } from "@repo/database/utils/utils";
import { postSchema } from "@repo/types";

export const getPosts = async (req: Request, res: Response) => {
  const posts = await db.post.findMany();
  res.status(200).json(posts);
};

export const getPostBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;

  const post = await db.post.findUnique({ where: { slug } });

  if (!post) {
    res.status(404).json({ message: "Post no encontrado" });
    return;
  }

  res.status(200).json(post);
};

export const createPost = async (req: Request, res: Response) => {
  console.log(req.auth);
  if (!req.auth?.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const { success, data, error } = postSchema.safeParse(req.body);

  if (!success || !data) {
    res.status(400).json({ message: error.flatten().fieldErrors });
    return;
  }

  const user = await db.user.findUnique({
    where: {
      clerkId: req.auth.userId,
    },
  });

  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const post = await db.post.create({
      data: {
        ...data,
        slug: generateSlug(data.title),
        userId: user.id,
      },
    });

    if (!post) {
      res.status(400).json({ message: "Error al crear el post" });
    }

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
