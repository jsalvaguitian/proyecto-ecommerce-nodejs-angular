
import { prisma } from "../config/prisma.js";

export const verificarConexionDB = async (): Promise<void> => {
  await prisma.$queryRaw`SELECT 1`;
};
