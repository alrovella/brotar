import { z } from "zod";

export const commentSchema = z.object({
  content: z
    .string({
      invalid_type_error: "El contenido es requerido",
      required_error: "El contenido es requerido",
    })
    .min(1, "El contenido es requerido"),
  postId: z
    .string({
      invalid_type_error: "El postId es requerido",
      required_error: "El postId es requerido",
    })
    .min(1, "El postId es requerido"),
});

export type CommentSchema = z.infer<typeof commentSchema>;
