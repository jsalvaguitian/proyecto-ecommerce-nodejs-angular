export type RolUsuario = "ADMIN" | "CLIENTE" | "VENDEDOR";

export class Usuario {

    constructor(
        public readonly id: number,
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public email: string,
        public passwordHash: string,
        public rol: RolUsuario,
        public readonly creadoEn: Date,
        public actualizadoEn: Date
    ) { }

}
