
import type { DatosRegistro } from "../dtos/auth/datos-registro.dto.js";
import type { UsuarioRegistrado } from "../dtos/auth/usuario-registrado.dto.js";
import { EmailYaRegistradoError } from "../errors/email-ya-registrado.error.js";
import { Usuario } from "../models/usuario.model.js";
import type { IAuthService } from "./auth.service.interface.js";
import type { IUsuarioRepository } from "../repositories/usuario.repository.interface.js";

import bcrypt from "bcrypt";

/*
npm install bcrypt
npm install -D @types/bcrypt
 */

export class AuthService implements IAuthService{

    private readonly SALT_ROUNDS = 12;

    constructor(private readonly usuarioRepository: IUsuarioRepository) {}

    async registrarUsuario(datos: DatosRegistro): Promise<Usuario> {
        // Verificar si el email ya está registrado
        const usuarioExistente = await this.usuarioRepository.buscarPorEmail(datos.email);
        
        if (usuarioExistente) {
            throw new EmailYaRegistradoError(datos.email);
        }

        const passwordHash = await bcrypt.hash(datos.password, this.SALT_ROUNDS);

        //convierto los datos de registro en un objeto Usuario para guardarlo en la base de datos
        const nuevoUsuario = Usuario.crear({
            nombre: datos.nombre,
            apellido: datos.apellido,
            direccion: datos.direccion,
            email: datos.email,
            passwordHash: passwordHash,
        });

        // Guardar el nuevo usuario en la base de datos
        const usuarioCreado = await this.usuarioRepository.crear(nuevoUsuario);

        return usuarioCreado;

    }

}