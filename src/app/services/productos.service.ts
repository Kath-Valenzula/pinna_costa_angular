import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

/**
 * Servicio que gestiona la obtención de productos desde un archivo JSON local.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * Ruta relativa al archivo de productos almacenado localmente.
   */
  private productosUrl = 'assets/data/productos.json';

  /**
   * Crea una instancia del servicio ProductService.
   * @param http Cliente HTTP utilizado para cargar datos de productos desde un archivo JSON.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista completa de productos desde el archivo local.
   * @returns Observable que emite un arreglo de productos.
   */
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }

  /**
   * Busca un producto específico por su identificador.
   * @param id Identificador del producto.
   * @returns Observable que emite el producto encontrado o undefined si no existe.
   */
  getById(id: number): Observable<Producto | undefined> {
    return new Observable(observer => {
      this.getAll().subscribe(productos => {
        const producto = productos.find(p => p.id === id);
        observer.next(producto);
        observer.complete();
      });
    });
  }
}
