import type { Request, Response, NextFunction } from "express";
import * as z from "zod";

export const validarInput = (schema: z.ZodType) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const resultado = schema.safeParse(req.body);

        if (!resultado.success) {
            res.status(400).json({
                mensaje: "Error de validación",
                errores: resultado.error.issues.map((error) => ({
                    campo: error.path.join("."),
                    mensaje: error.message
                }))
            });
            return;
        }

        req.body = resultado.data; // Sobrescribe req.body con los datos validados
        next();
    };
};