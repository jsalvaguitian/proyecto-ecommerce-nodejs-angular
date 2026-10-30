import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi
} from "vitest";

import type { Request, Response } from "express";
import type { IAuthService } from "../../../src/interfaces/services/auth.service.interface.js";
import { AuthController } from "../../../src/controllers/auth.controller.js";

// Mock del servicio
let authServiceMock: IAuthService;
let authController: AuthController;

beforeEach(() => {

    authServiceMock = {
        registrarUsuario: vi.fn().mockResolvedValue({
            id: 1,
            nombre: "Jesi",
            apellido: "Salva",
            direccion: "Balvanera",
            email: "jesi@example.com",
            rol: "CLIENTE",
        }),
    };

    authController = new AuthController(authServiceMock);
});

afterEach(() => {
    vi.clearAllMocks();
});

describe("Registro de usuarios", () => {

    it("Dado que los datos son válidos, cuando se registra un usuario, entonces devuelve 201 y los datos públicos", async () => {

        // Given
        const datosRegistro = {
            nombre: "Jesi",
            apellido: "Salva",
            direccion: "Balvanera",
            email: "jesi@example.com",
            password: "UnaClaveSegura123!",
        };

        const req = {
            body: datosRegistro,
        } as Request;

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis(),
        } as unknown as Response;

        // When
        await authController.registrar(req, res);

        // Then
        expect(res.status).toHaveBeenCalledWith(201);

        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            nombre: "Jesi",
            apellido: "Salva",
            direccion: "Balvanera",
            email: "jesi@example.com",
            rol: "CLIENTE",
        });

        expect(authServiceMock.registrarUsuario)
            .toHaveBeenCalledWith(datosRegistro);
    });

});