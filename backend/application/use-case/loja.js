import { LojaEntities } from "../../domain/entities/LojaEntities.js";
import { estadosCoords } from "../../helper/estadoCoords.js";

export class CriarLoja {
  constructor(repo) { this.repo = repo; }

  async execute(dadosLoja) {
    const loja = new LojaEntities(dadosLoja);
    if (!loja.nome || !loja.cidade) {
      throw new Error("Nome e cidade são obrigatórios");
    }
    return await this.repo.save(loja);
  }
}

export class ListaLojas {
  constructor(repo) { this.repo = repo; }

  async execute({ page = 1, limit = 10 } = {}) {
    page = Math.max(1, Number(page));
    limit = Math.max(1, Number(limit));

    const all = await this.repo.findAll();
    const total = all.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = all.slice(start, end);

    return { items, total, page, limit };
  }
}

export class BuscarLoja {
  constructor(repo) { this.repo = repo; }

  async execute(id) {
    const loja = await this.repo.findById(id);
    if (!loja) throw new Error("Loja não encontrada");
    return loja;
  }
}

export class AtualizarLoja {
  constructor(repo) { this.repo = repo; }

  async execute(id, dadosAtualizados) {
    const lojaExistente = await this.repo.findById(id);
    if (!lojaExistente) throw new Error("Loja não encontrada");

    const lojaAtualizada = new LojaEntities({ ...lojaExistente, ...dadosAtualizados });
    return await this.repo.update(id, lojaAtualizada);
  }
}

export class DeletarLoja {
  constructor(repo) { this.repo = repo; }

  async execute(id) {
    const loja = await this.repo.findById(id);
    if (!loja) throw new Error("Loja não encontrada");

    await this.repo.delete(id);
    return true;
  }
}

// ===== Agregação por estado das lojas =====
export class AgregacaoLojasPorEstado {
  constructor(repo) { this.repo = repo; }

  async execute() {
    const items = await this.repo.findAll();
    const result = {};

    items.forEach(item => {
      const estado = item.estado?.trim() || "Desconhecido";

      // Usa coordenadas da loja se tiver, senão do helper
      const coords = {
        lat: item.latitude || (estadosCoords[estado]?.lat ?? 0),
        lng: item.longitude || (estadosCoords[estado]?.lng ?? 0),
      };

      if (!result[estado]) {
        result[estado] = { count: 0, ...coords };
      }

      result[estado].count += 1;
    });

    return Object.entries(result).map(([estado, data]) => ({
      estado,
      count: data.count,
      lat: data.lat,
      lng: data.lng
    }));
  }
}
