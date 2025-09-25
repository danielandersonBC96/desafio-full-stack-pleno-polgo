import { 
  CriarGanhador,
  ListaGanhadores,
  BuscarGanhador,
  AtualizarGanhador,
  DeletarGanhador,
  AgregacaoGanhadoresPorEstado 
} from "../../../application/use-case/ganhadores.js";

import { FormatoDaResposta } from "../../utils/formatoDeResposta.js"; 

export class GanhadorController {
  constructor(repo) {
    this.repo = repo;
  }

  criar = async (req, res, next) => {
    try {
      const usecase = new CriarGanhador(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(FormatoDaResposta({ data: result, message: "Ganhador criado com sucesso" }));
    } catch (err) {
      next(err);
    }
  }

  lista = async (req, res, next) => {
    try {
      const usecase = new ListaGanhadores(this.repo);
      const { items, total, page = 1, limit = 10 } = await usecase.execute(req.query);
      res.json(FormatoDaResposta({
        data: items,
        pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
        message: "Dados recuperados com sucesso"
      }));
    } catch (err) {
      next(err);
    }
  }

  buscar = async (req, res, next) => {
    try {
      const usecase = new BuscarGanhador(this.repo);
      const result = await usecase.execute(req.params.id);
      res.json(FormatoDaResposta({ data: result, message: "Ganhador encontrado" }));
    } catch (err) {
      next(err);
    }
  }

  atualizar = async (req, res, next) => {
    try {
      const usecase = new AtualizarGanhador(this.repo);
      const result = await usecase.execute(req.params.id, req.body);
      res.json(FormatoDaResposta({ data: result, message: "Ganhador atualizado com sucesso" }));
    } catch (err) {
      next(err);
    }
  }

  deletar = async (req, res, next) => {
    try {
      const usecase = new DeletarGanhador(this.repo);
      await usecase.execute(req.params.id);
      res.json(FormatoDaResposta({ message: "Ganhador removido com sucesso" }));
    } catch (err) {
      next(err);
    }
  }

  // ✅ Nova rota de agregação por estado
  agregacao = async (req, res, next) => {
    try {
      const usecase = new AgregacaoGanhadoresPorEstado(this.repo);
      const result = await usecase.execute();
      res.json(FormatoDaResposta({ data: result, message: "Agregação por estado realizada com sucesso" }));
    } catch (err) {
      next(err);
    }
  }
}
