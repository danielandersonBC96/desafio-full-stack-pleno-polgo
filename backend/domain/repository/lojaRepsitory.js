// src/domain/repository/lojaRepository.js
import { 
  NotFoundException, 
  ValidationException, 
  DatabaseException 
} from "../expections/expections.js";
import { Loja } from "../../infrastructure/db/schemas/lojaSchemas.js";

export class LojaRepository {

  async lojasPorEstado() {
    try {
      const result = await Loja.aggregate([
        {
          $group: {
            _id: "$estado",
            count: { $sum: 1 },
            lat: { $first: "$latitude" }, // pega a primeira latitude do estado
            lng: { $first: "$longitude" } // pega a primeira longitude do estado
          }
        },
        {
          $project: {
            _id: 0,
            estado: "$_id",
            count: 1,
            lat: 1,
            lng: 1
          }
        }
      ]);

      return result;
    } catch (err) {
      throw new DatabaseException("Erro ao agregar lojas por estado");
    }
  }
  
  async save(loja) {
    if (!loja) {
      throw new ValidationException("Dados da loja inválidos");
    }

    try {
      // Calcula latitude e longitude a partir do endereço
      const coords = await getCoordinates(`${loja.nome}, ${loja.estado}`);
      const novaLoja = new Loja({
        ...loja,
        latitude: coords?.latitude,
        longitude: coords?.longitude
      });
      return await novaLoja.save();
    } catch (err) {
      throw new DatabaseException(err.message);
    }
  }

  async update(id, update) {
    if (!id) throw new ValidationException("ID da loja é obrigatório");
    if (!update) throw new ValidationException("Dados de atualização inválidos");

    try {
      // Atualiza latitude e longitude se houver alteração de endereço
      if (update.nome || update.estado) {
        const coords = await getCoordinates(`${update.nome || ''}, ${update.estado || ''}`);
        update.latitude = coords?.latitude;
        update.longitude = coords?.longitude;
      }

      const lojaAtualizada = await Loja.findByIdAndUpdate(id, update, { new: true });
      if (!lojaAtualizada) throw new NotFoundException("Loja não encontrada");
      return lojaAtualizada;
    } catch (err) {
      throw new DatabaseException(err.message);
    }
  }

  async findAll() {
    try {
      return await Loja.find();
    } catch (err) {
      throw new DatabaseException(err.message);
    }
  }

  async findById(id) {
    if (!id) throw new ValidationException("ID da loja é obrigatório");
    try {
      const loja = await Loja.findById(id);
      if (!loja) throw new NotFoundException("Loja não encontrada");
      return loja;
    } catch (err) {
      throw new DatabaseException(err.message);
    }
  }

  async delete(id) {
    if (!id) throw new ValidationException("ID da loja é obrigatório");
    try {
      const lojaDeletada = await Loja.findByIdAndDelete(id);
      if (!lojaDeletada) throw new NotFoundException("Loja não encontrada");
      return lojaDeletada;
    } catch (err) {
      throw new DatabaseException(err.message);
    }
  }
}
