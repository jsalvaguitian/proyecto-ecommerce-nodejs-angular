export interface UsuarioRegistrado {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    rol : "CLIENTE" | "ADMIN";
}

//Mi dto de salida