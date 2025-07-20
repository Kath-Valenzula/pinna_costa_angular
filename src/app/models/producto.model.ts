/**
 * Representa un producto disponible en la tienda.
 */
export interface Producto {
  /** Identificador único */
  id: number;
  /** Nombre o título mostrado */
  nombre: string;
  /** Precio en pesos chilenos */
  precio: number;
  /** URL relativa de la imagen */
  imagen: string;
  /** Campo opcional con una descripción extendida */
  descripcion?: string;
}
