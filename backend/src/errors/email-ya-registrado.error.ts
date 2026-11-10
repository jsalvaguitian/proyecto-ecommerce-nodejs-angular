//es como nuestra excepción personalizada para el caso de que el email ya esté registrado en la base de datos.

export class EmailYaRegistradoError extends Error {
    constructor(email: string) {
        super(`El email ${email} ya está registrado.`);
        this.name = "EmailYaRegistradoError";
    }
}