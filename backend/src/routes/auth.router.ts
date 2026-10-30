import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/auth.service.js";

const authRouter = Router();

const authController = new AuthController(new AuthService);

authRouter.post('/registrar', authController.registrar)

export default authRouter;