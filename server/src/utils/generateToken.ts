import jwt from "jsonwebtoken";

export const generateToken = (userId: number) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET não definido nas variáveis de ambiente.");
  }

  return jwt.sign(
    { id: userId },
    secret,
    {
      expiresIn: "1h", // string OK
    }
  );
};
