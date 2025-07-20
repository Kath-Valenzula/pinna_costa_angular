import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/producto.model';
import { CartService } from 'src/app/services/cart.service';

/**
 * Componente que muestra un listado de productos disponibles en la tienda.
 */
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  /** Productos cargados para mostrar */
  productos: Producto[] = [];

  /**
   * Constructor que inyecta los servicios requeridos
   * @param http Cliente HTTP para obtener los datos
   * @param cartService Servicio para manejar el carrito
   * @param title Servicio para modificar el título del documento
   * @param meta Servicio para actualizar las etiquetas meta
   */
  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Método de inicialización que carga los productos y configura metadatos
   */
  ngOnInit(): void {
    this.title.setTitle('Catálogo - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubre nuestra colección de productos en Piña Costa.'
    });

    this.cargarProductos();
  }

  /**
   * Obtiene los productos desde un archivo JSON local
   */
  cargarProductos(): void {
    this.http.get<Producto[]>('assets/data/productos.json').subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }

  /**
   * Agrega un producto al carrito
   * @param producto Producto a agregar
   */
  agregarAlCarrito(producto: Producto): void {
    this.cartService.agregar(producto);
  }
}
