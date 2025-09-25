import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getLojas = async () => {
  try {
    const res = await api.get("/lojas");
    return res.data;
  } catch (err) {
    throw new Error("Erro ao buscar lojas");
  }
};

export const criarLoja = async (loja, token) => {
  try {
    const res = await api.post("/lojas", loja, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    throw new Error("Erro ao criar loja");
  }
};

// Adicione os outros endpoints da mesma forma
