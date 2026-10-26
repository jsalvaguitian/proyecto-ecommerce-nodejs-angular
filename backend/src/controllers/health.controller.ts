
import type { Request, Response } from "express";
import { comprobarEstado } from "../services/health.service.js";

export const obtenerEstado = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const estado = await comprobarEstado();
    res.status(200).json(estado);
  } catch (error) {
    console.error("Error al comprobar la base de datos:", error);

    res.status(503).json({
      status: "error",
      database: "disconnected",
    });
  }
};
