
export class NotFoundException extends Error {
  constructor(message = "Recurso não encontrado") {
    super(message);
    this.name = "NotFoundException";
  }
}

export class ValidationException extends Error {
  constructor(message = "Dados inválidos") {
    super(message);
    this.name = "ValidationException";
  }
}

export class DatabaseException extends Error {
  constructor(message = "Erro no banco de dados") {
    super(message);
    this.name = "DatabaseException";
  }
}

export class ConflictException extends Error {
  constructor(message = "Conflito detectado") {
    super(message);
    this.name = "ConflictException";
  }
}

export class UnauthorizedException extends Error {
  constructor(message = "Não autorizado") {
    super(message);
    this.name = "UnauthorizedException";
  }
}

export class ForbiddenException extends Error {
  constructor(message = "Proibido") {
    super(message);
    this.name = "ForbiddenException";
  }
}

export class TooManyRequestsException extends Error {
  constructor(message = "Muitas requisições") {
    super(message);
    this.name = "TooManyRequestsException";
  }
}

export class InfrastructureException extends Error {
  constructor(message = "Erro de infraestrutura") {
    super(message);
    this.name = "InfrastructureException";
  }
}
