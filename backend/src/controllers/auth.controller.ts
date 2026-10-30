import type { Request, Response } from "express";
import type { IAuthService } from "../interfaces/services/auth.service.interface.js"

export class AuthController {

    constructor( private readonly authService : IAuthService){}



    public registrar = async( req: Request, res: Response): Promise<void> => {
        
        try {

            const usuario = await this.authService.registrarUsuario(req.body);
            res.status(201).json(usuario);
            
        } catch (error) {
            console.error("Error al registrar usuario: ", error);

            res.status(500).json({
                error: "Error interno al servidor"
            });
            
        }
    }
}