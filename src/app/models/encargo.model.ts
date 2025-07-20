/**
 * Representa un encargo personalizado realizado por un cliente.
 */
export interface Encargo {
    /** Identificador único */
    id: number;
    /** Nombre del encargo */
    nombre: string;
    /** Descripción detallada del encargo */
    descripcion: string;
    /** Precio total del encargo */
    precio: number;
}