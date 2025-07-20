import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guardia que protege rutas exclusivas para administradores.
 */
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  /**
   * Constructor que inyecta el router y el servicio de autenticación.
   * @param router Servicio de navegación
   * @param auth Servicio de autenticación
   */
  constructor(private router: Router, private auth: AuthService) {}

  /**
   * Método que determina si el usuario tiene rol de administrador.
   * @returns true si es admin, redirige si no.
   */
  canActivate(): boolean {
    const user = this.auth.getCurrent();
    if (user && user.rol === 'admin') return true;
    this.router.navigate([user ? '/perfil' : '/login']);
    return false;
  }
}
