
import { Router } from "express";
import { obtenerEstado } from "../controllers/health.controller.js";

const healtRouter = Router();

healtRouter.get("/", obtenerEstado);

export default healtRouter;
