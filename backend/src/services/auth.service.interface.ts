import type { DatosRegistro } from "../dtos/auth/datos-registro.dto.js";
import type { Usuario } from "../models/usuario.model.js";


export interface IAuthService {
    registrarUsuario(datos:DatosRegistro): Promise<Usuario>; 
}