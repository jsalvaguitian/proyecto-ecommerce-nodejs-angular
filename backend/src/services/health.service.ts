
import { verificarConexionDB } from "../repositories/healt.repository.js";

export const comprobarEstado = async () => {
  await verificarConexionDB();

  return {
    status: "ok",
    database: "connected",
  };
};
