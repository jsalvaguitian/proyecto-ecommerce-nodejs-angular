
import { afterEach, describe, expect, it, vi } from "vitest";
import { verificarConexionDB } from "../../../src/repositories/healt.repository.js";
import { comprobarEstado } from "../../../src/services/health.service.js";

vi.mock("../../../src/repositories/healt.repository.js", () => ({
  verificarConexionDB: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("Comprobar el estado de la aplicación", () => {
  it("Dado que la base de datos responde, cuando se comprueba el estado, entonces devuelve una conexión exitosa", async () => {
    // Given: la base de datos responde correctamente
    vi.mocked(verificarConexionDB).mockResolvedValue(undefined);

    // When: se comprueba el estado de la aplicación
    const resultado = await comprobarEstado();

    // Then: se informa que la conexión está activa
    expect(resultado).toEqual({
      status: "ok",
      database: "connected",
    });

    expect(verificarConexionDB).toHaveBeenCalledOnce();
  });

  it("Dado que la base de datos falla, cuando se comprueba el estado, entonces propaga el error", async () => {
    // Given: la base de datos no puede responder
    vi.mocked(verificarConexionDB).mockRejectedValue(
      new Error("Error de conexión"),
    );

    // When / Then: la comprobación propaga el error
    await expect(comprobarEstado()).rejects.toThrow(
      "Error de conexión",
    );
  });
});
