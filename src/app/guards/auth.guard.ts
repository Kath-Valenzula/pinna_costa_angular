import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guardia que permite acceso solo si el usuario está autenticado.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  /**
   * Constructor que inyecta el servicio de autenticación y el router.
   * @param router Servicio de navegación
   * @param auth Servicio de autenticación
   */
  constructor(private router: Router, private auth: AuthService) {}

  /**
   * Método que determina si una ruta puede ser activada.
   * @returns true si el usuario está autenticado, false si no.
   */
  canActivate(): boolean {
    const user = this.auth.getCurrent();
    if (user) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
