import { prisma } from "../config/prisma.js";
import type { Usuario } from "../models/usuario.model.js";
import type { IUsuarioRepository } from "./usuario.repository.interface.js";

export class UsuarioRepository implements IUsuarioRepository {

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });

        if (!usuario) {
            return null;
        }

        return usuario;
    }


    async crear(usuario: Usuario): Promise<Usuario> {
        const usuarioCreado = await prisma.usuario.create({
            data: {
                ...usuario,
                creadoEn: new Date(),
                actualizadoEn: new Date()
            }
        });

        return usuarioCreado;
    }



}