import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/auth.service.js";
import { UsuarioRepository } from "../repositories/usuario.repository.js";
import { validarInput } from "../middlewares/auth-validar.middleware.js";
import { validateInputRegister } from "../validators/auth.validator.js";

const authRouter = Router();

//Repositorio
const usuarioRepository = new UsuarioRepository(); 
//Servicio
const usuarioService = new AuthService(usuarioRepository); 
//Controlador
const authController = new AuthController(usuarioService);

authRouter.post('/registrar',validarInput(validateInputRegister) ,authController.registrar)

export default authRouter;