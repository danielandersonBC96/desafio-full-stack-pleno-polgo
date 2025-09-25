
import { LojaController } from "../../../../infrastructure/http/controller/lojaController.js";
import { FormatoDaResposta } from "../../../../infrastructure/utils/formatoDeResposta.js";
import * as usecases from "../../../../application/use-case/loja.js"; 

describe("LojaController", () => {
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

    controller = new LojaController(mockRepo);

    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it("deve criar uma loja", async () => {
    const loja = { nome: "Loja A", cidade: "São Paulo" };
    req.body = loja;
    mockRepo.save.mockResolvedValue({ id: 1, ...loja });

    await controller.criar(req, res, next);

    expect(mockRepo.save).toHaveBeenCalledWith(expect.objectContaining(loja));
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: { id: 1, ...loja }, message: "Loja criada com sucesso" })
    );
  });

  it("deve retornar 400 quando nome ou cidade não forem enviados", async () => {
    req.body = {}; // sem nome e cidade
    const erroEsperado = new Error("Nome e cidade são obrigatórios");

    // Spy no Use Case CriarLoja para rejeitar o erro
    jest.spyOn(usecases.CriarLoja.prototype, "execute").mockRejectedValue(erroEsperado);

    await controller.criar(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: erroEsperado.message });
    expect(next).not.toHaveBeenCalled();
  });

  it("deve listar lojas com paginação", async () => {
    const items = [
      { id: 1, nome: "Loja A" },
      { id: 2, nome: "Loja B" }
    ];
    req.query = { page: 1, limit: 2 };

    // Spy no Use Case ListaLojas
    jest.spyOn(usecases, "ListaLojas").mockImplementation(() => {
      return {
        execute: jest.fn().mockResolvedValue({
          items,
          total: 2,
          page: 1,
          limit: 2
        })
      };
    });

    await controller.lista(req, res, next);

    expect(usecases.ListaLojas).toHaveBeenCalledWith(mockRepo);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({
        data: items,
        pagination: { total: 2, page: 1, limit: 2, totalPages: 1 },
        message: "Dados recuperados com sucesso"
      })
    );
  });

  it("deve buscar uma loja por id", async () => {
    const loja = { id: 1, nome: "Loja A" };
    req.params = { id: 1 };
    mockRepo.findById.mockResolvedValue(loja);

    await controller.buscar(req, res, next);

    expect(mockRepo.findById).toHaveBeenCalledWith(1);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: loja, message: "Loja encontrada" })
    );
  });

  it("deve atualizar uma loja", async () => {
    const dadosAtualizados = { nome: "Loja A Atualizada" };
    req.params = { id: 1 };
    req.body = dadosAtualizados;

    mockRepo.findById.mockResolvedValue({
      id: 1,
      nome: "Loja A",
      cidade: "São Paulo"
    });
    mockRepo.update.mockResolvedValue({ id: 1, ...dadosAtualizados });

    await controller.atualizar(req, res, next);

    expect(mockRepo.update).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ nome: "Loja A Atualizada" })
    );

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ nome: "Loja A Atualizada" }),
        message: "Loja atualizada com sucesso"
      })
    );
  });

  it("deve chamar next em caso de erro no atualizar quando loja não existe", async () => {
    req.params = { id: 1 };
    req.body = { nome: "Nova Loja" };
    mockRepo.findById.mockResolvedValue(null);
    const erroEsperado = new Error("Loja não encontrada");

    await controller.atualizar(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.objectContaining({ message: erroEsperado.message }));
  });

  it("deve deletar uma loja", async () => {
    req.params = { id: 1 };
    mockRepo.findById.mockResolvedValue({ id: 1, nome: "Loja A" });
    mockRepo.delete.mockResolvedValue(true);

    await controller.deletar(req, res, next);

    expect(mockRepo.delete).toHaveBeenCalledWith(1);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ message: "Loja removida com sucesso" })
    );
  });

  it("deve chamar next em caso de erro no deletar quando loja não existe", async () => {
    req.params = { id: 1 };
    mockRepo.findById.mockResolvedValue(null);
    const erroEsperado = new Error("Loja não encontrada");

    await controller.deletar(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.objectContaining({ message: erroEsperado.message }));
  });

  it("deve agregar lojas por estado", async () => {
    const agregacao = [
      { estado: "SP", count: 2, lat: -23.5505, lng: -46.6333 },
      { estado: "RJ", count: 1, lat: -22.9068, lng: -43.1729 }
    ];

    jest.spyOn(usecases, "AgregacaoLojasPorEstado").mockImplementation(() => {
      return { execute: jest.fn().mockResolvedValue(agregacao) };
    });

    await controller.agregacao(req, res, next);

    expect(usecases.AgregacaoLojasPorEstado).toHaveBeenCalledWith(mockRepo);
    expect(res.json).toHaveBeenCalledWith(
      FormatoDaResposta({ data: agregacao, message: "Agregação de lojas por estado realizada com sucesso" })
    );
  });
});
