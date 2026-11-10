import type { RolUsuario } from "../../models/usuario.model.js";

export interface UsuarioRegistrado {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    rol : RolUsuario;
}

//Mi dto de salida