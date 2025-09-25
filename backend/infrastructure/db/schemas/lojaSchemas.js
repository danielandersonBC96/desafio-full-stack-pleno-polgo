import mongoose from "mongoose";

const lojaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  estado: { type: String, required: true },
  cnpj: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{14}$/.test(v.replace(/\D/g, ""));
      },
      message: (props) => `${props.value} não é um CNPJ válido!`
    }
  },
  latitude: { type: Number },
  longitude: { type: Number }
}, {
  timestamps: true
});

export const Loja = mongoose.model("Loja", lojaSchema);
