import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encargo } from '../models/encargo.model';
import { Producto } from '../models/producto.model';

/**
 * Servicio para consumir archivos JSON desde la carpeta `assets`.
 */
@Injectable({ providedIn: 'root' })
export class JsonService {
  /** Ruta al archivo de encargos */
  private encargosUrl = 'assets/data/encargos.json';
  /** Ruta al archivo de productos */
  private productosUrl = 'assets/data/productos.json';

  /**
   * Constructor que inyecta HttpClient.
   * @param http Cliente HTTP de Angular
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los encargos.
   * @returns Observable con arreglo de encargos
   */
  getEncargos(): Observable<Encargo[]> {
    return this.http.get<Encargo[]>(this.encargosUrl);
  }

  /**
   * Crea un nuevo encargo.
   * @param encargo Encargo a registrar
   * @returns Observable con el encargo creado
   */
  addEncargo(encargo: Encargo): Observable<Encargo> {
    return this.http.post<Encargo>(this.encargosUrl, encargo);
  }

  /**
   * Actualiza un encargo existente.
   * @param encargo Encargo actualizado
   * @returns Observable con el encargo modificado
   */
  updateEncargo(encargo: Encargo): Observable<Encargo> {
    return this.http.put<Encargo>(`${this.encargosUrl}/${encargo.id}`, encargo);
  }

  /**
   * Elimina un encargo por ID.
   * @param id ID del encargo a eliminar
   * @returns Observable void
   */
  deleteEncargo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.encargosUrl}/${id}`);
  }

  /**
   * Obtiene todos los productos.
   * @returns Observable con arreglo de productos
   */
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }

  /**
   * Agrega un producto.
   * @param producto Producto a crear
   * @returns Observable con el producto creado
   */
  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productosUrl, producto);
  }

  /**
   * Actualiza un producto existente.
   * @param producto Producto actualizado
   * @returns Observable con el producto modificado
   */
  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.productosUrl}/${producto.id}`, producto);
  }

  /**
   * Elimina un producto por ID.
   * @param id ID del producto a eliminar
   * @returns Observable void
   */
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productosUrl}/${id}`);
  }
}
