import { Router } from "express";
import healthRouter from "./health.router.js";

export class AppRoutes{

    static get routes(): Router{
        const router = Router();

        router.use("/api/health", healthRouter)

        return router;
    }
}