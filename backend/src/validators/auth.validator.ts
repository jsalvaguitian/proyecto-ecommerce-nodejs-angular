import zod from "zod";

export const validateInputRegister = zod.object({
    nombre: zod
        .string()
        .trim()
        .min(1, { message: "El nombre es requerido" })
        .regex(
            /^[\p{L}\p{M}]+(?:[\s-][\p{L}\p{M}]+)*$/u,
            { message: "El nombre solo puede contener letras, espacios simples y guiones" }
        ),

    apellido: zod
        .string()
        .trim() // 2. Limpia automáticamente espacios al inicio y final
        .min(1, { message: "El apellido es requerido" })
        .regex(
            /^[\p{L}\p{M}]+(?:[\s-][\p{L}\p{M}]+)*$/u,
            { message: "El apellido solo puede contener letras, espacios simples y guiones" }
        ),

    direccion: zod
        .string()
        .trim() // elimina espacios de los extremos 
        .min(1, "La dirección es obligatoria")
        .regex(
            /^[\p{L}\p{M}\d\s.,/#()-]+$/u, // Puedes agregar más caracteres como / () si los necesitas
            "La dirección contiene caracteres no válidos"
        ),

    email: zod
        .string()
        .trim()
        .min(1, { message: "El email es requerido" })
        .pipe(
            zod.email({ message: "El email no es válido" })
        )

});





