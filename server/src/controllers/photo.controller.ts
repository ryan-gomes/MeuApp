import { Response } from "express";
import Photo from "../models/Photo";
import { AuthRequest } from "../middlewares/auth.middleware";

export const getMyPhotos = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const photos = await Photo.find({ owner: userId }).sort({ createdAt: -1 });
    res.json(photos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar fotos" });
  }
};

export const uploadPhoto = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Arquivo não enviado" });

    const url = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const photo = new Photo({ owner: req.userId, url });
    await photo.save();

    res.json(photo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao salvar foto" });
  }
};
