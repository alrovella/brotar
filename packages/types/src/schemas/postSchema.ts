import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      invalid_type_error: "El título es requerido",
      required_error: "El título es requerido",
    })
    .min(1, "El título es requerido"),
  content: z
    .string({
      invalid_type_error: "El contenido es requerido",
      required_error: "El contenido es requerido",
    })
    .min(1, "El contenido es requerido"),
  keywords: z.string().optional(),
  categoryId: z
    .string({
      invalid_type_error: "La categoría es requerida",
      required_error: "La categoría es requerida",
    })
    .min(1, "La categoría es requerida"),
});
