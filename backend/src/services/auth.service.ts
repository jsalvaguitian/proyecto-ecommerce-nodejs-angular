import bcrypt from "bcrypt";

import type { DatosRegistro } from "../dtos/auth/datos-registro.dto.js";
import type { UsuarioRegistrado } from "../dtos/auth/usuario-registrado.dto.js";
import { EmailYaRegistradoError } from "../errors/email-ya-registrado.error.js";
import type { IUsuarioRepository } from "../interfaces/repositories/usuario.repository.interface.js";
import type { IAuthService } from "../interfaces/services/auth.service.interface.js";
import { Usuario } from "../models/usuario.model.js";


export class AuthService implements IAuthService{

    private readonly SALT_ROUNDS = 12;

    constructor(private readonly usuarioRepository: IUsuarioRepository) {}

    async registrarUsuario(datos: DatosRegistro): Promise<UsuarioRegistrado> {
        // Verificar si el email ya está registrado
        const usuarioExistente = await this.usuarioRepository.buscarPorEmail(datos.email);
        
        if (usuarioExistente) {
            throw new EmailYaRegistradoError(datos.email);
        }

        const passwordHash = await bcrypt.hash(datos.password, this.SALT_ROUNDS);

        //convierto los datos de registro en un objeto Usuario para guardarlo en la base de datos
        const nuevoUsuario = new Usuario(
            0, // El ID será asignado por la base de datos
            datos.nombre,
            datos.apellido,
            datos.direccion,
            datos.email,
            passwordHash,
            "CLIENTE", // Asignar un rol predeterminado
            new Date(), // Fecha de creación
            new Date()  // Fecha de actualización
        );

        // Guardar el nuevo usuario en la base de datos
        const usuarioCreado = await this.usuarioRepository.crear(nuevoUsuario);

        const usuarioRegistrado: UsuarioRegistrado = {
            id: usuarioCreado.id,
            nombre: usuarioCreado.nombre,
            apellido: usuarioCreado.apellido,
            direccion: usuarioCreado.direccion,
            email: usuarioCreado.email,
            rol: usuarioCreado.rol,
            creadoEn: usuarioCreado.creadoEn,
            actualizadoEn: usuarioCreado.actualizadoEn
        };

        return usuarioRegistrado;

    }


}