import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Servicio que maneja los productos añadidos al carrito, incluyendo almacenamiento en localStorage y emisión de cambios.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   * Lista interna de productos del carrito.
   */
  private items: Producto[] = [];

  /**
   * Sujeto observable que emite los cambios del carrito a los componentes suscritos.
   */
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  /**
   * Constructor que carga el carrito guardado desde localStorage, si existe.
   */
  constructor() {
    const data = localStorage.getItem('carrito');
    if (data) {
      this.items = JSON.parse(data);
      this.carritoSubject.next(this.items);
    }
  }

  /**
   * Agrega un producto al carrito, lo guarda y emite el nuevo estado.
   * @param producto Producto que se desea agregar al carrito.
   */
  agregar(producto: Producto): void {
    this.items.push(producto);
    this.guardar();
    this.actualizarCarrito();
  }

  /**
   * Devuelve todos los productos actualmente almacenados en el carrito.
   * @returns Arreglo de productos en el carrito.
   */
  obtenerItems(): Producto[] {
    return this.items;
  }

  /**
   * Devuelve un observable para suscribirse a los cambios del carrito.
   * @returns Observable que emite la lista de productos actualizada.
   */
  obtenerCarritoObservable(): Observable<Producto[]> {
    return this.carritoSubject.asObservable();
  }

  /**
   * Elimina todos los productos del carrito y actualiza el almacenamiento y observable.
   */
  limpiarCarrito(): void {
    this.items = [];
    this.guardar();
    this.actualizarCarrito();
  }

  /**
   * Guarda el contenido actual del carrito en localStorage.
   */
  private guardar(): void {
    localStorage.setItem('carrito', JSON.stringify(this.items));
  }

  /**
   * Notifica a los observadores con la versión actualizada del carrito.
   */
  private actualizarCarrito(): void {
    this.carritoSubject.next(this.items);
  }
}
