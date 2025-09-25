import mongoose from "mongoose";

const ganhadorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  estado: { type: String, required: true },
  cidade: { type: String, required: true },
  premio: { type: String, required: true },
  data: { 
    type: Date, 
    default: Date.now, 
    required: true 
  }
});

// Aqui você exporta o model, já associando com a collection "ganhadores"
export const Ganhador = mongoose.model("Ganhador", ganhadorSchema);
