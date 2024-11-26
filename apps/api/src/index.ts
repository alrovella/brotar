import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import cors from "cors";
import morgan from "morgan";
import postRoutes from "./routes/postRoutes";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import commentRoutes from "./routes/commentRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import userRoutes from "./routes/userRoutes";

const env = process.env.NODE_ENV ?? "local";
const envFile = `.env.${env}`;

// Cargar primero el archivo base `.env` (siempre aplicable)
dotenv.config({ path: path.resolve(__dirname, "../.env") });
// Cargar el archivo específico del entorno si existe
dotenv.config({ path: path.resolve(__dirname, `../${envFile}`) });

const app = express();
const PORT = process.env.PORT ?? 3000;

app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// Rutas
app.use("/posts", requireAuth(), postRoutes);
app.use("/comments", requireAuth(), commentRoutes);
app.use("/categories", requireAuth(), categoryRoutes);
app.use("/users", requireAuth(), userRoutes);

app.use((req, res, next) => {
  console.log("auth", req.auth);
  res.status(404).json({ message: "Route Not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
