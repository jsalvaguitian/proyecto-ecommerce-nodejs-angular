import type { Request, Response } from "express";
import type { IAuthService } from "../interfaces/services/auth.service.interface.js"
import { EmailYaRegistradoError } from "../errors/email-ya-registrado.error.js";

export class AuthController {

    constructor( private readonly authService : IAuthService){}



    public registrar = async( req: Request, res: Response): Promise<void> => {
        
        try {

            const usuario = await this.authService.registrarUsuario(req.body);
            res.status(201).json(usuario);
            
        } catch (error) {

            if(error instanceof EmailYaRegistradoError){
                res.status(409).json({
                    error: error.message
                });
                return;
            }

            console.error("Error al registrar usuario: ", error);

            res.status(500).json({
                error: "Error interno al servidor"
            });
            
        }
    }
}
/*
ERROR 409: Conflict
Este código de estado indica que la solicitud no se pudo completar debido a un conflicto con el estado actual del recurso. 
En el contexto de registro de usuarios, se usa para indicar que el email es ya está registrado en la base de datos.
*/