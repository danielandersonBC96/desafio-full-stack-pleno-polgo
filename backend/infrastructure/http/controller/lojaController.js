import { 
  CriarLoja,
  ListaLojas,
  BuscarLoja,
  AtualizarLoja,
  DeletarLoja,
  AgregacaoLojasPorEstado 
} from "../../../application/use-case/loja.js";
import { FormatoDaResposta } from "../../utils/formatoDeResposta.js";

export class LojaController {
  constructor(repo) {
    this.repo = repo;
  }

  criar = async (req, res, next) => {
    try {
      const usecase = new CriarLoja(this.repo);
      const result = await usecase.execute(req.body);
      res.status(201).json(
        FormatoDaResposta({ data: result, message: "Loja criada com sucesso" })
      );
    } catch (err) {
      if (err.message.includes("obrigatórios") || err.message.includes("CNPJ")) {
        return res.status(400).json({ error: err.message });
      }
      next(err);
    }
  }

  lista = async (req, res, next) => {
    try {
      const usecase = new ListaLojas(this.repo);
      const { items, total, page = 1, limit = 10 } = await usecase.execute(req.query);
      res.json(
        FormatoDaResposta({ 
          data: items, 
          pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
          message: "Dados recuperados com sucesso" 
        })
      );
    } catch (err) {
      next(err);
    }
  }

  buscar = async (req, res, next) => {
    try {
      const usecase = new BuscarLoja(this.repo);
      const result = await usecase.execute(req.params.id);
      res.json(FormatoDaResposta({ data: result, message: "Loja encontrada" }));
    } catch (err) {
      next(err);
    }
  }

  atualizar = async (req, res, next) => {
    try {
      const usecase = new AtualizarLoja(this.repo);
      const result = await usecase.execute(req.params.id, req.body);
      res.json(FormatoDaResposta({ data: result, message: "Loja atualizada com sucesso" }));
    } catch (err) {
      next(err);
    }
  }

  deletar = async (req, res, next) => {
    try {
      const usecase = new DeletarLoja(this.repo);
      await usecase.execute(req.params.id);
      res.json(FormatoDaResposta({ message: "Loja removida com sucesso" }));
    } catch (err) {
      next(err);
    }
  }

  agregacao = async (req, res, next) => {
    try {
      // ✅ Use case correto de agregação de lojas
      const usecase = new AgregacaoLojasPorEstado(this.repo);
      const result = await usecase.execute();
      res.json(FormatoDaResposta({ data: result, message: "Agregação de lojas por estado realizada com sucesso" }));
    } catch (err) {
      next(err);
    }
  }
}
