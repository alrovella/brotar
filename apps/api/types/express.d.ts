import type { AuthObject } from "@clerk/express";

declare global {
  namespace Express {
    interface Request {
      auth?: AuthObject; // Reemplaza 'any' con el tipo específico si lo conoces
    }
  }
}
