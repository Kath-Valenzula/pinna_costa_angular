/**
 * Representa un usuario registrado en la aplicación.
 */
export interface Usuario {
  /** Identificador único */
  id?: number;
  /** Nombre del usuario */
  nombre: string;
  /** Correo electrónico */
  email: string;
  /** Contraseña de acceso */
  password: string;
  /** Rol asignado al usuario */
  rol?: string;
  /** Dirección de despacho opcional */
  direccionDespacho?: string;
  /** Fecha de nacimiento en formato ISO */
  fechaNacimiento?: string;
}