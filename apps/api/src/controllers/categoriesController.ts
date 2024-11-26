import type { Request, Response } from "express";
import db from "@repo/database/client";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await db.category.findMany();
  res.status(200).json(categories);
};
