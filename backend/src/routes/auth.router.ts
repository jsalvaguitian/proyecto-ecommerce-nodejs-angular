import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/auth.service.js";
import { UsuarioRepository } from "../repositories/usuario.repository.js";

const authRouter = Router();

//Repositorio
const usuarioRepository = new UsuarioRepository(); 
//Servicio
const usuarioService = new AuthService(usuarioRepository); 
//Controlador
const authController = new AuthController(usuarioService);


authRouter.post('/registrar', authController.registrar)

export default authRouter;