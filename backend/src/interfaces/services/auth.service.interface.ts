import type { DatosRegistro } from "../../dtos/auth/datos-registro.dto.js";
import type { UsuarioRegistrado } from "../../dtos/auth/usuario-registrado.dto.js";


export interface IAuthService {
    registrarUsuario(datos:DatosRegistro): Promise<UsuarioRegistrado>; 
}