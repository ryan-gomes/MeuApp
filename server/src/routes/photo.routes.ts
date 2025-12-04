import { Router } from "express";
import multer from "multer";
import { authMiddleware } from "../middlewares/auth.middleware";
import { getMyPhotos, uploadPhoto } from "../controllers/photo.controller";
import path from "path";
import fs from "fs";

const router = Router();

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "uploads/");
  },
  filename: function (_req, file, cb) {
    const unique = Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, unique);
  }
});

const upload = multer({ storage });

router.get("/my", authMiddleware, getMyPhotos);
router.post("/upload", authMiddleware, upload.single("photo"), uploadPhoto);

export default router;
