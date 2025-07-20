import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ProductService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

/**
 * Componente de la página principal que muestra productos destacados.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** Productos mostrados en portada */
  productos: Producto[] = [];

  /**
   * Constructor que inyecta servicios necesarios
   * @param productSvc Servicio para obtener productos
   * @param title Servicio para modificar el título del documento
   * @param meta Servicio para actualizar meta etiquetas
   */
  constructor(
    private productSvc: ProductService,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Carga los productos al iniciar el componente y actualiza metadatos
   */
  ngOnInit(): void {
    this.title.setTitle('Inicio - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Explora productos destacados de Piña Costa.'
    });

    this.productSvc.getAll().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }
}
