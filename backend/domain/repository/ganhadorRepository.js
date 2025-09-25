// src/domain/repository/ganhadorRepository.js
import {
  NotFoundException,
  ValidationException,
  DatabaseException,
  ConflictException,
  UnauthorizedException,
  ForbiddenException,
  TooManyRequestsException,
  InfrastructureException
} from "../expections/expections.js";

export class GanhadorRepository {

   async ganhadorPorEstado() {
    try {
      const result = await Ganhador.aggregate([
        {
          $group: {
            _id: "$estado",
            total: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            estado: "$_id",
            total: 1,
          },
        },
      ]);

      return result;
    } catch (err) {
      throw new DatabaseException("Erro ao agregar ganhadores por estado");
    }
  }

  async save(ganhador) {
    if (!ganhador) {
      throw new ValidationException("Dados do ganhador inválidos");
    }
    // Aqui poderia ter lógica de persistência, mas por enquanto lança exceção
    throw new DatabaseException("Método save não implementado");
  }

  async findAll() {
    // Aqui poderia buscar todos os ganhadores no banco
    throw new DatabaseException("Método findAll não implementado");
  }

  async findById(id) {
    if (!id) {
      throw new ValidationException("ID do ganhador é obrigatório");
    }
    // Aqui poderia buscar um ganhador pelo ID
    throw new NotFoundException("Ganhador não encontrado");
  }

  async update(id, ganhador) {
    if (!id) {
      throw new ValidationException("ID do ganhador é obrigatório");
    }
    if (!ganhador) {
      throw new ValidationException("Dados do ganhador inválidos");
    }
    // Aqui poderia atualizar os dados do ganhador
    throw new DatabaseException("Método update não implementado");
  }

  async delete(id) {
    if (!id) {
      throw new ValidationException("ID do ganhador é obrigatório");
    }
    // Aqui poderia remover o ganhador
    throw new NotFoundException("Ganhador não encontrado");
  }
}
