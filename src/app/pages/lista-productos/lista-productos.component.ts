import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JsonService } from '../../services/json.service';
import { Producto } from '../../models/producto.model';

/**
 * Componente que muestra y administra la lista de productos desde un archivo JSON.
 */
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  /** Lista de productos obtenidos desde el servicio */
  productos: Producto[] = [];

  /** Objeto para agregar un nuevo producto */
  nuevo: Producto = { id: 0, nombre: '', precio: 0, imagen: '', descripcion: '' };

  /** Producto actualmente en edición (si aplica) */
  editando?: Producto;

  /**
   * Constructor que inyecta el servicio de productos.
   * @param jsonSvc Servicio encargado de manejar los productos.
   */
  constructor(private jsonSvc: JsonService) {}

  /** Carga todos los productos al iniciar el componente. */
  ngOnInit(): void {
    this.cargarProductos();
  }

  /** Obtiene los productos desde el servicio. */
  cargarProductos(): void {
    this.jsonSvc.getProductos().subscribe(data => (this.productos = data));
  }

  /**
   * Agrega un nuevo producto.
   * @param form Formulario de creación.
   */
  agregar(form: NgForm): void {
    if (form.invalid) return;
    this.jsonSvc.addProducto(this.nuevo).subscribe(() => {
      this.cargarProductos();
      form.resetForm();
    });
  }

  /**
   * Pone el producto en modo edición.
   * @param producto Producto a editar.
   */
  editar(producto: Producto): void {
    this.editando = { ...producto };
  }

  /**
   * Actualiza el producto editado.
   * @param form Formulario de edición.
   */
  actualizar(form: NgForm): void {
    if (!this.editando) return;
    this.jsonSvc.updateProducto(this.editando).subscribe(() => {
      this.cargarProductos();
      this.cancelar();
      form.resetForm();
    });
  }

  /**
   * Elimina un producto por su ID.
   * @param id ID del producto.
   */
  eliminar(id: number): void {
    this.jsonSvc.deleteProducto(id).subscribe(() => this.cargarProductos());
  }

  /** Cancela la edición de un producto. */
  cancelar(): void {
    this.editando = undefined;
  }

  /**
   * Actualiza un campo del producto actual.
   * @param campo Campo a modificar.
   * @param valor Valor a asignar.
   */
  actualizarCampo<K extends keyof Producto>(campo: K, valor: Producto[K]): void {
    if (this.editando) {
      this.editando[campo] = valor;
    } else {
      this.nuevo[campo] = valor;
    }
  }
}
