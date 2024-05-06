import express from "express";
import { downloadImage, uploadImage } from "../controllers/image-Controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);

export default router;
