import { 
  CriarGanhador, 
  ListaGanhadores, 
  BuscarGanhador, 
  AtualizarGanhador, 
  DeletarGanhador,
  AgregacaoGanhadoresPorEstado
} from "../../../backend/application/use-case/ganhadores.js";
import { GanhadorEntities } from "../../domain/entities/ganhadorEntities.js";

describe("Casos de uso de Ganhadores", () => {
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

  test("CriarGanhador deve salvar entidade", async () => {
    const dados = { nome: "Maria", estado: "AM" };
    const useCase = new CriarGanhador(mockRepo);

    mockRepo.save.mockResolvedValue(new GanhadorEntities(dados));

    const result = await useCase.execute(dados);

    expect(mockRepo.save).toHaveBeenCalledWith(expect.any(GanhadorEntities));
    expect(result).toBeInstanceOf(GanhadorEntities);
    expect(result.nome).toBe("Maria");
  });

  test("ListaGanhadores deve aplicar paginação", async () => {
    const items = Array.from({ length: 25 }, (_, i) => ({ id: i + 1, nome: `User ${i}` }));
    mockRepo.findAll.mockResolvedValue(items);

    const useCase = new ListaGanhadores(mockRepo);
    const result = await useCase.execute({ page: 2, limit: 10 });

    expect(result.items.length).toBe(10);
    expect(result.total).toBe(25);
    expect(result.page).toBe(2);
    expect(result.limit).toBe(10);
  });

  test("BuscarGanhador deve retornar um item por ID", async () => {
    const item = { id: 1, nome: "Carlos" };
    mockRepo.findById.mockResolvedValue(item);

    const useCase = new BuscarGanhador(mockRepo);
    const result = await useCase.execute(1);

    expect(mockRepo.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(item);
  });

  test("AtualizarGanhador deve atualizar dados", async () => {
    const item = { id: 1, nome: "Pedro Atualizado" };
    mockRepo.update.mockResolvedValue(new GanhadorEntities(item));

    const useCase = new AtualizarGanhador(mockRepo);
    const result = await useCase.execute(1, { nome: "Pedro Atualizado" });

    expect(mockRepo.update).toHaveBeenCalledWith(1, { nome: "Pedro Atualizado" });
    expect(result).toBeInstanceOf(GanhadorEntities);
    expect(result.nome).toBe("Pedro Atualizado");
  });

  test("DeletarGanhador deve remover item", async () => {
    mockRepo.delete.mockResolvedValue(true);

    const useCase = new DeletarGanhador(mockRepo);
    const result = await useCase.execute(1);

    expect(mockRepo.delete).toHaveBeenCalledWith(1);
    expect(result).toBe(true);
  });

  test("AgregacaoGanhadoresPorEstado deve agrupar por estado", async () => {
    const items = [
      { id: 1, estado: "AM" },
      { id: 2, estado: "AM" },
      { id: 3, estado: "SP" },
      { id: 4, estado: "" } // desconhecido
    ];
    mockRepo.findAll.mockResolvedValue(items);

    const useCase = new AgregacaoGanhadoresPorEstado(mockRepo);
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
