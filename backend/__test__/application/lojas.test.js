import {
  CriarLoja,
  ListaLojas,
  BuscarLoja,
  AtualizarLoja,
  DeletarLoja,
  AgregacaoLojasPorEstado
} from "../../../backend/application/use-case/loja.js";
import { LojaEntities } from "../../domain/entities/LojaEntities.js";

describe("Casos de uso de Lojas", () => {
  let mockRepo;

  beforeEach(() => {
    mockRepo = {
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    };
  });

  test("CriarLoja deve salvar loja válida", async () => {
    const dados = { nome: "Loja XPTO", cidade: "Manaus", estado: "AM" };
    const useCase = new CriarLoja(mockRepo);

    mockRepo.save.mockResolvedValue(new LojaEntities(dados));

    const result = await useCase.execute(dados);

    expect(mockRepo.save).toHaveBeenCalled();
    expect(result).toBeInstanceOf(LojaEntities);
    expect(result.nome).toBe("Loja XPTO");
  });

  test("CriarLoja deve lançar erro se nome ou cidade faltarem", async () => {
    const useCase = new CriarLoja(mockRepo);

    await expect(useCase.execute({ nome: "", cidade: "" }))
      .rejects.toThrow("Nome e cidade são obrigatórios");
  });

  test("ListaLojas deve aplicar paginação", async () => {
    const lojas = Array.from({ length: 25 }, (_, i) => ({ id: i + 1, nome: `Loja ${i}`, cidade: "Manaus" }));
    mockRepo.findAll.mockResolvedValue(lojas);

    const useCase = new ListaLojas(mockRepo);
    const result = await useCase.execute({ page: 2, limit: 10 });

    expect(result.items.length).toBe(10);
    expect(result.total).toBe(25);
    expect(result.page).toBe(2);
    expect(result.limit).toBe(10);
  });

  test("BuscarLoja deve retornar loja por ID", async () => {
    const loja = { id: 1, nome: "Loja 1", cidade: "Manaus" };
    mockRepo.findById.mockResolvedValue(loja);

    const useCase = new BuscarLoja(mockRepo);
    const result = await useCase.execute(1);

    expect(mockRepo.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(loja);
  });

  test("BuscarLoja deve lançar erro se loja não encontrada", async () => {
    mockRepo.findById.mockResolvedValue(null);
    const useCase = new BuscarLoja(mockRepo);

    await expect(useCase.execute(999)).rejects.toThrow("Loja não encontrada");
  });

  test("AtualizarLoja deve atualizar dados de loja existente", async () => {
    const lojaExistente = { id: 1, nome: "Loja Antiga", cidade: "Manaus" };
    const lojaAtualizada = { id: 1, nome: "Loja Nova", cidade: "Manaus" };

    mockRepo.findById.mockResolvedValue(lojaExistente);
    mockRepo.update.mockResolvedValue(lojaAtualizada);

    const useCase = new AtualizarLoja(mockRepo);
    const result = await useCase.execute(1, { nome: "Loja Nova" });

    expect(mockRepo.update).toHaveBeenCalled();
    expect(result.nome).toBe("Loja Nova");
  });

  test("AtualizarLoja deve lançar erro se loja não existir", async () => {
    mockRepo.findById.mockResolvedValue(null);
    const useCase = new AtualizarLoja(mockRepo);

    await expect(useCase.execute(999, { nome: "Fake" }))
      .rejects.toThrow("Loja não encontrada");
  });

  test("DeletarLoja deve remover loja existente", async () => {
    const loja = { id: 1, nome: "Loja Teste", cidade: "Manaus" };

    mockRepo.findById.mockResolvedValue(loja);
    mockRepo.delete.mockResolvedValue(true);

    const useCase = new DeletarLoja(mockRepo);
    const result = await useCase.execute(1);

    expect(mockRepo.delete).toHaveBeenCalledWith(1);
    expect(result).toBe(true);
  });

  test("DeletarLoja deve lançar erro se loja não encontrada", async () => {
    mockRepo.findById.mockResolvedValue(null);
    const useCase = new DeletarLoja(mockRepo);

    await expect(useCase.execute(999))
      .rejects.toThrow("Loja não encontrada");
  });

  test("AgregacaoLojasPorEstado deve agrupar por estado", async () => {
    const lojas = [
      { id: 1, nome: "L1", cidade: "Manaus", estado: "AM" },
      { id: 2, nome: "L2", cidade: "Manaus", estado: "AM" },
      { id: 3, nome: "L3", cidade: "São Paulo", estado: "SP" },
      { id: 4, nome: "L4", cidade: "Cidade X", estado: "" } // desconhecido
    ];
    mockRepo.findAll.mockResolvedValue(lojas);

    const useCase = new AgregacaoLojasPorEstado(mockRepo);
    const result = await useCase.execute();

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ estado: "AM", count: 2 }),
        expect.objectContaining({ estado: "SP", count: 1 }),
        expect.objectContaining({ estado: "Desconhecido", count: 1 })
      ])
    );
  });
});
