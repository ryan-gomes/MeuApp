import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import photoRoutes from "./routes/photo.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/auth", authRoutes);
app.use("/photos", photoRoutes);

const PORT = process.env.PORT || 4000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

start();
