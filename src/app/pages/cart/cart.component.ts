import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Producto } from 'src/app/models/producto.model';
import { CartService } from 'src/app/services/cart.service';

/**
 * Componente que muestra los productos añadidos al carrito de compras.
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /** Productos actualmente almacenados en el carrito */
  items: Producto[] = [];

  /**
   * Constructor que inyecta servicios necesarios
   * @param cartService Servicio que gestiona el carrito
   * @param title Servicio para modificar el título de la página
   * @param meta Servicio para actualizar las etiquetas meta
   */
  constructor(
    private cartService: CartService,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Inicializa el componente cargando los productos del carrito y configurando metadatos
   */
  ngOnInit(): void {
    this.title.setTitle('Carrito - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Revisa los productos añadidos a tu carrito en Piña Costa.'
    });

    this.items = this.cartService.obtenerItems();
  }

  /**
   * Elimina todos los productos del carrito y actualiza la vista
   */
  limpiarCarrito(): void {
    this.cartService.limpiarCarrito();
    this.items = [];
  }

  /**
   * Calcula el precio total de los productos en el carrito
   * @returns Total acumulado en CLP
   */
  obtenerTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.precio || 0), 0);
  }
}
