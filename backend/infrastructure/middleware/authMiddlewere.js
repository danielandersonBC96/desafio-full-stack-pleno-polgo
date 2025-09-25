import { verifyToken } from "../security/jwtConfig.js";

export function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1]; 

  try {
    const user = verifyToken(token);
    req.user = user; 
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token inválido" });
  }
}
