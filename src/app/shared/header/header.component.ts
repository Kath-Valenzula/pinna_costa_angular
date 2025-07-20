import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Producto } from '../../models/producto.model';

/**
 * Componente que representa la cabecera de la aplicación.
 * Incluye navegación, nombre del usuario autenticado y cantidad de productos en el carrito.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /** Cantidad de productos en el carrito */
  cantidad = 0;
  /** Estado de autenticación del usuario */
  estaAutenticado = false;
  /** Nombre o correo del usuario autenticado */
  nombreUsuario = '';

  /**
   * Constructor que inyecta servicios de carrito y enrutamiento.
   * @param cartService Servicio del carrito
   * @param router Servicio de rutas
   */
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  /**
   * Inicializa el componente, suscribiéndose a cambios en el carrito y navegación.
   */
  ngOnInit(): void {
    this.cartService.obtenerCarritoObservable().subscribe((items: Producto[]) => {
      this.cantidad = items.length;
    });

    this.leerSesion();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.leerSesion();
      }
    });
  }

  /**
   * Lee la sesión del usuario desde localStorage y actualiza estado.
   */
  private leerSesion(): void {
    const usuario = localStorage.getItem('usuario');
    this.estaAutenticado = !!usuario;
    this.nombreUsuario = usuario ? JSON.parse(usuario).nombre || JSON.parse(usuario).email : '';
  }

  /**
   * Navega a la vista de login.
   */
  irALogin(): void {
    this.router.navigate(['/login']);
  }

  /**
   * Devuelve la ruta del perfil según el rol del usuario.
   * @returns Ruta del perfil
   */
  get rutaPerfil(): string {
    const raw = localStorage.getItem('usuario');
    if (!raw) return '/login';
    const datos = JSON.parse(raw);
    return datos.rol === 'admin' ? '/admin' : '/perfil';
  }

  /**
   * Cierra la sesión actual del usuario y redirige al login.
   */
  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.estaAutenticado = false;
    this.nombreUsuario = '';
    this.router.navigate(['/login']);
  }
}
