import type { Request, Response } from "express";
import db from "@repo/database/client";
import { clerkClient } from "@clerk/express";

export const getAppUser = async (req: Request, res: Response) => {
  if (!req.auth?.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const userId = req.auth.userId;

  const clerkUser = await clerkClient.users.getUser(userId);

  try {
    let appUser = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!appUser) {
      appUser = await db.user.create({
        data: {
          firstName: clerkUser.firstName ?? "",
          lastName: clerkUser.lastName ?? "",
          email: clerkUser.emailAddresses[0].emailAddress,
          clerkId: clerkUser.id,
        },
      });
    }

    res.status(201).json(appUser);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
