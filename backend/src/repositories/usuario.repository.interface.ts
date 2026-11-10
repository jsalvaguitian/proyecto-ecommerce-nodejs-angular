import type { Usuario } from "../models/usuario.model.js";

export interface IUsuarioRepository {
    crear(usuario: Usuario): Promise<Usuario>;
    buscarPorEmail(email: string): Promise<Usuario | null>;

}