import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { Producto } from '../../models/producto.model';

/**
 * Componente del panel de administración para gestionar usuarios y productos.
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /** Usuario autenticado en el panel */
  usuario!: Usuario;

  /** Lista de usuarios registrados */
  usuarios: Usuario[] = [];

  /** Listado de productos disponibles */
  productos: Producto[] = [];

  /** Formulario reactivo para agregar o editar productos */
  productoForm!: FormGroup;

  /**
   * Constructor que inyecta los servicios requeridos
   * @param router Servicio de rutas para navegación
   * @param title Servicio para actualizar el título del documento
   * @param meta Servicio para modificar etiquetas meta
   * @param fb FormBuilder para crear formularios reactivos
   */
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private fb: FormBuilder
  ) {}

  /**
   * Inicializa el componente cargando usuarios y productos, y configurando el formulario
   */
  ngOnInit(): void {
    this.title.setTitle('Admin - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Panel de administración de Piña Costa.'
    });

    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.productoForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      imagen: [''],
      descripcion: [''],
      precio: [null, Validators.required]
    });
    this.cargarUsuarios();
    this.cargarProductos();
  }

  /**
   * Carga la lista de usuarios desde localStorage
   */
  cargarUsuarios(): void {
    const data = localStorage.getItem('usuarios');
    this.usuarios = data ? JSON.parse(data) : [];
  }

  /**
   * Carga la lista de productos desde localStorage
   */
  cargarProductos(): void {
    const data = localStorage.getItem('productos');
    this.productos = data ? JSON.parse(data) : [];
  }

  /**
   * Redirige al formulario de registro de usuario
   */
  crearUsuario(): void {
    this.router.navigate(['/registro']);
  }

  /**
   * Muestra un mensaje para editar un usuario (acción simulada)
   * @param usuario Usuario que se desea editar
   */
  editarUsuario(usuario: Usuario): void {
    alert(`Editar usuario: ${usuario.nombre}`);
  }

  /**
   * Elimina un usuario de la lista tras confirmación
   * @param usuario Usuario a eliminar
   */
  eliminarUsuario(usuario: Usuario): void {
    if (confirm(`¿Eliminar a ${usuario.nombre}?`)) {
      this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  /**
   * Carga los datos del producto seleccionado en el formulario
   * @param producto Producto a editar
   */
  editarProducto(producto: Producto): void {
    this.productoForm.patchValue(producto);
  }

  /**
   * Elimina un producto de la lista tras confirmación
   * @param producto Producto a eliminar
   */
  eliminarProducto(producto: Producto): void {
    if (confirm(`¿Eliminar producto "${producto.nombre}"?`)) {
      this.productos = this.productos.filter(p => p.id !== producto.id);
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }

  /**
   * Guarda un producto nuevo o editado en localStorage
   */
  guardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    const data = this.productoForm.value;

    if (data.id) {
      const idx = this.productos.findIndex(p => p.id === data.id);
      if (idx !== -1) this.productos[idx] = { ...data };
    } else {
      const nuevoId = this.productos.length
        ? Math.max(...this.productos.map(p => p.id)) + 1
        : 1;
      this.productos.push({ ...data, id: nuevoId });
    }

    localStorage.setItem('productos', JSON.stringify(this.productos));
    this.productoForm.reset({ id: null, nombre: '', imagen: '', descripcion: '', precio: null });
  }

  /**
   * Elimina la sesión actual del administrador y recarga la aplicación
   */
  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
