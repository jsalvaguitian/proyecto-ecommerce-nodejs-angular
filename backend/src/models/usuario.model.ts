export type RolUsuario = "ADMIN" | "CLIENTE";

export interface DatosNuevoUsuario {
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    passwordHash: string;
}

export class Usuario {

    constructor(
        public readonly id: number | null,
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public email: string,
        public passwordHash: string,
        public rol: RolUsuario,
        public readonly creadoEn: Date | null,
        public actualizadoEn: Date | null
    ) { }

    static crear(datos: DatosNuevoUsuario): Usuario {
        return new Usuario(
            null,
            datos.nombre,
            datos.apellido,
            datos.direccion,
            datos.email,
            datos.passwordHash,
            "CLIENTE",
            null,
            null
        );
    }

}
