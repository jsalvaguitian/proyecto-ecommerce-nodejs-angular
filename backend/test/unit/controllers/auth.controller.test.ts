import { afterEach, describe, it } from "node:test";
import { vi, expect } from "vitest";

import type { Request, Response } from "express";
import { registrarUsuario } from "../../../src/services/auth.service.js";
import { registrar } from "../../../src/controllers/auth.controller.js";



vi.mock("../../../src/services/auth.services.js", () => ({
    registrarUsuario: vi.fn()
}))

afterEach(() => {
    vi.clearAllMocks();
})


describe("Registro de usuarios", () => {
    it("Dado que los datos son válidos, cuando se registra un usuario, entonces devuelve 201 y los datos públicos", async () => {
        // Given: una persona envía datos válidos
        const datosRegistro = {
            nombre: "Jesi",
            apellido: "Salva",
            direccion: "Balvanera",
            email: "jesi@example.com",
            password: "UnaClaveSegura123!",
        };

        vi.mocked(registrarUsuario).mockResolvedValue({
            id: 1,
            nombre: "Jesi",
            apellido: "Salva",
            direccion: "Balvanera",
            email: "jesi@example.com",
            rol: "CLIENTE",
        });

        const req = {
            body: datosRegistro,
        } as Request;

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis(),
        } as unknown as Response;

        // When: se ejecuta el controlador
        await registrar(req, res);

        // Then: responde con HTTP 201 Created
        expect(res.status).toHaveBeenCalledWith(201);

        // And: devuelve los datos públicos del usuario
        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            nombre: "Jésica",
            email: "jesica@example.com",
            rol: "CLIENTE",
        });

        // And: delega el registro al servicio
        expect(registrarUsuario).toHaveBeenCalledWith(datosRegistro);
    });
});