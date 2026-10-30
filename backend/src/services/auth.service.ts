import type { DatosRegistro } from "../dtos/auth/datos-registro.dto.js";
import type { UsuarioRegistrado } from "../dtos/auth/usuario-registrado.dto.js";
import type { IAuthService } from "../interfaces/services/auth.service.interface.js";

export class AuthService implements IAuthService{

    async registrarUsuario(datos: DatosRegistro): Promise<UsuarioRegistrado> {
        throw new Error("Method not implemented.");
    }


}