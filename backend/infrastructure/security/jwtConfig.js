import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // carrega as variáveis do .env

const SECRET_KEY = process.env.JWT_SECRET; // pega do .env
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h"; // opcional, default 1 hora

// Gera token
export function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
}

// Verifica token
export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}
