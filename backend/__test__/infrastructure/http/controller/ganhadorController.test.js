
import { GanhadorController } from "../../../../infrastructure/http/controller/ganhadorController.js";
import { FormatoDaResposta } from "../../../../infrastructure/utils/formatoDeResposta.js";
import {
  ListaGanhadores
} from "../../../../application/use-case/ganhadores.js"; 

describe("GanhadorController", () => {
  let mockRepo;
  let controller;
  let req;
  let res;
  let next;

  beforeEach(() => {
    mockRepo = {
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    };
    controller = new GanhadorController(mockRepo);

    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it("deve criar um ganhador", async () => {
    const ganhador = { nome: "João", estado: "SP" };
    req.body = ganhador;
    mockRepo.save.mockResolvedValue({ id: 1, ...ganhador });

    await controller.criar(req, res, next);

    expect(mockRepo.save).toHaveBeenCalledWith(expect.objectContaining(ganhador));
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: { id: 1, ...ganhador }, message: "Ganhador criado com sucesso" })
    );
  });

  it("deve listar ganhadores com paginação", async () => {
    const items = [
      { id: 1, nome: "João", estado: "SP" },
      { id: 2, nome: "Maria", estado: "RJ" }
    ];

    req.query = { page: 1, limit: 2 };

    // Spy no Use Case para garantir retorno esperado
    jest.spyOn(ListaGanhadores.prototype, "execute").mockResolvedValue({
      items,
      total: 2,
      page: 1,
      limit: 2
    });

    await controller.lista(req, res, next);

    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({
        data: items,
        pagination: { total: 2, page: 1, limit: 2, totalPages: 1 },
        message: "Dados recuperados com sucesso"
      })
    );
  });

  it("deve buscar um ganhador por id", async () => {
    const ganhador = { id: 1, nome: "João", estado: "SP" };
    req.params = { id: 1 };
    mockRepo.findById.mockResolvedValue(ganhador);

    await controller.buscar(req, res, next);

    expect(mockRepo.findById).toHaveBeenCalledWith(1);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: ganhador, message: "Ganhador encontrado" })
    );
  });

  it("deve atualizar um ganhador", async () => {
    const dadosAtualizados = { nome: "João Silva" };
    req.params = { id: 1 };
    req.body = dadosAtualizados;
    mockRepo.update.mockResolvedValue({ id: 1, ...dadosAtualizados });

    await controller.atualizar(req, res, next);

    expect(mockRepo.update).toHaveBeenCalledWith(1, dadosAtualizados);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: { id: 1, ...dadosAtualizados }, message: "Ganhador atualizado com sucesso" })
    );
  });

  it("deve deletar um ganhador", async () => {
    req.params = { id: 1 };
    mockRepo.delete.mockResolvedValue(true);

    await controller.deletar(req, res, next);

    expect(mockRepo.delete).toHaveBeenCalledWith(1);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ message: "Ganhador removido com sucesso" })
    );
  });

  it("deve agregar ganhadores por estado", async () => {
    const agregacao = [
      { estado: "SP", count: 2, lat: -23.5505, lng: -46.6333 },
      { estado: "RJ", count: 1, lat: -22.9068, lng: -43.1729 },
      { estado: "Desconhecido", count: 1, lat: 0, lng: 0 }
    ];

    mockRepo.findAll.mockResolvedValue([
      { estado: "SP" },
      { estado: "RJ" },
      { estado: "SP" },
      { estado: null }
    ]);

    await controller.agregacao(req, res, next);

    expect(mockRepo.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: agregacao, message: "Agregação por estado realizada com sucesso" })
    );
  });
});
