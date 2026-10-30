import { Router } from "express";
import healthRouter from "./health.router.js";
import authRouter from "./auth.router.js";

export class AppRoutes{

    static get routes(): Router{
        const router = Router();

        router.use("/api/health", healthRouter)
        router.use("/api/auth", authRouter)


        return router;
    }
}