

import { GanhadorRepository } from "../../../domain/repository/ganhadorRepository.js"; // corrigido
import { Ganhador as GanhadorModel } from "../schemas/ganhadorSchema.js";
import { GanhadorEntities } from "../../../domain/entities/ganhadorEntities.js";

export class MongoGanhadorRepository extends GanhadorRepository {
  async save(ganhador) {
    const novoGanhador = new GanhadorModel(ganhador);
    const saved = await novoGanhador.save();
    return new GanhadorEntities({ ...saved._doc, id: saved._id });
  }

  async findAll() {
    const docs = await GanhadorModel.find();
    return docs.map((doc) => new GanhadorEntities({ ...doc._doc, id: doc._id }));
  }

  async findById(id) {
    const doc = await GanhadorModel.findById(id);
    if (!doc) return null;
    return new GanhadorEntities({ ...doc._doc, id: doc._id });
  }

  async update(id, update) {
    const doc = await GanhadorModel.findByIdAndUpdate(id, update, {
      new: true,       
      runValidators: true, 
    });
    if (!doc) return null;
    return new GanhadorEntities({ ...doc._doc, id: doc._id });
  }

  async delete(id) {
    const doc = await GanhadorModel.findByIdAndDelete(id);
    if (!doc) return null;
    return new GanhadorEntities({ ...doc._doc, id: doc._id });
  }
}
