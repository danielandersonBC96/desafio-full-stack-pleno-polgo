import { GanhadorEntities } from "../../domain/entities/ganhadorEntities.js";
import { estadosCoords } from "../../helper/estadoCoords.js";


export class CriarGanhador {
  constructor(repo) {
    this.repo = repo;
  }

  async execute(dados) {
    const ganhador = new GanhadorEntities(dados);
    return await this.repo.save(ganhador);
  }
}

export class ListaGanhadores {
  constructor(repo) {
    this.repo = repo;
  }

  async execute({ page = 1, limit = 10 } = {}) {
    // busca todos os ganhadores do repositório
    const allItems = await this.repo.findAll();

    // aplica paginação simples
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const items = allItems.slice(startIndex, endIndex);

    return {
      items,
      total: allItems.length,
      page,
      limit
    };
  }
}

export class BuscarGanhador {
  constructor(repo) {
    this.repo = repo;
  }

  async execute(id) {
    return await this.repo.findById(id);
  }
}

export class AtualizarGanhador {
  constructor(repo) {
    this.repo = repo;
  }

  async execute(id, dados) {
    return await this.repo.update(id, dados);
  }
}

export class DeletarGanhador {
  constructor(repo) {
    this.repo = repo;
  }

  async execute(id) {
    return await this.repo.delete(id);
  }
}
export class AgregacaoGanhadoresPorEstado {
  constructor(repo) {
    this.repo = repo;
  }

  async execute() {
    const items = await this.repo.findAll();
    const result = {};

    items.forEach(item => {
      const estado = item.estado && item.estado.trim() ? item.estado : "Desconhecido";

      // Garante coordenadas default caso não existam no helper
      const coords = estadosCoords[estado] || { lat: 0, lng: 0 };

      if (!result[estado]) {
        result[estado] = { count: 0, ...coords };
      }

      result[estado].count += 1;
    });

    // Retornar como array para o frontend
    return Object.entries(result).map(([estado, data]) => ({
      estado,
      count: data.count,
      lat: data.lat,
      lng: data.lng
    }));
  }
}