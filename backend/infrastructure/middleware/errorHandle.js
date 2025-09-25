
import {
  NotFoundException,
  ValidationException,
  DatabaseException,
  ConflictException,
  UnauthorizedException,
  ForbiddenException,
  TooManyRequestsException,
  InfrastructureException
} from "../../domain/expections/expections.js";

export function errorHandler(err, req, res, next) {
  if (err instanceof ValidationException) return res.status(400).json({ error: err.message });
  if (err instanceof NotFoundException) return res.status(404).json({ error: err.message });
  if (err instanceof ConflictException) return res.status(409).json({ error: err.message });
  if (err instanceof UnauthorizedException) return res.status(401).json({ error: err.message });
  if (err instanceof ForbiddenException) return res.status(403).json({ error: err.message });
  if (err instanceof TooManyRequestsException) return res.status(429).json({ error: err.message });
  if (err instanceof DatabaseException) return res.status(500).json({ error: "Erro de banco de dados" });
  if (err instanceof InfrastructureException) return res.status(502).json({ error: "Erro de infraestrutura" });

  // Erro genérico
  res.status(500).json({ error: "Erro interno do servidor" });
}
