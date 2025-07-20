import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductService } from 'src/app/services/productos.service';
import { CartService } from 'src/app/services/cart.service';

/**
 * Componente que muestra el detalle de un producto específico, basado en el ID recibido por la ruta. Permite agregar el producto al carrito.
 */
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  /** Producto actualmente mostrado en pantalla */
  producto!: Producto;

  /**
   * Constructor que inyecta servicios necesarios para acceder al producto y agregar al carrito
   * @param route Servicio para obtener parámetros de la URL
   * @param productService Servicio para buscar productos por ID
   * @param cartService Servicio para agregar productos al carrito
   * @param title Servicio para modificar el título del documento
   * @param meta Servicio para actualizar etiquetas meta
   */
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Obtiene el ID del producto desde la URL, lo busca en el servicio y lo carga en pantalla. También define el título y meta descripción.
   */
  ngOnInit(): void {
    this.title.setTitle('Producto - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Detalles del producto seleccionado en Piña Costa.'
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getById(id).subscribe((prod) => {
        if (prod) {
          this.producto = prod;
        }
      });
    }
  }

  /**
   * Agrega el producto actual al carrito usando el servicio CartService y muestra una alerta de confirmación.
   */
  agregarAlCarrito(): void {
    if (this.producto) {
      this.cartService.agregar(this.producto);
      alert(`"${this.producto.nombre}" fue agregado al carrito.`);
    }
  }
}
