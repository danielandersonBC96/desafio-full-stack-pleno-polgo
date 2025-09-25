import { LojaRepository } from "../../../domain/repository/lojaRepsitory.js";
import { Loja as LojaModel } from "../schemas/lojaSchemas.js";
import { LojaEntities } from "../../../domain/entities/LojaEntities.js";

export class MongoLojaRepository extends LojaRepository {


    
 
  // Salvar nova loja
  async save(loja) {
    const novaLoja = new LojaModel(loja);
    const saved = await novaLoja.save();
    return new LojaEntities({ ...saved._doc, id: saved._id });
  }

  // Atualizar loja por ID
  async update(id, update) {
    const doc = await LojaModel.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });
    if (!doc) return null;
    return new LojaEntities({ ...doc._doc, id: doc._id });
  }

  // Deletar loja por ID
  async delete(id) {
    const doc = await LojaModel.findByIdAndDelete(id);
    if (!doc) return null;
    return new LojaEntities({ ...doc._doc, id: doc._id });
  }

  // Buscar todas as lojas
  async findAll() {
    const docs = await LojaModel.find();
    return docs.map(doc => new LojaEntities({ ...doc._doc, id: doc._id }));
  }

  // Buscar loja por ID
  async findById(id) {
    const doc = await LojaModel.findById(id);
    if (!doc) return null;
    return new LojaEntities({ ...doc._doc, id: doc._id });
  }
}
