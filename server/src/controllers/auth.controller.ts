import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Dados incompletos" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email já cadastrado" });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({ name, email, passwordHash });
    await user.save();

    const token = generateToken(user._id.toString());

    res.json({
      user: { _id: user._id, name: user.name, email: user.email },
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Dados incompletos" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Credenciais inválidas" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(400).json({ message: "Credenciais inválidas" });

    const token = generateToken(user._id.toString());

    res.json({
      user: { _id: user._id, name: user.name, email: user.email },
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro no servidor" });
  }
};
