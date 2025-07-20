import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService, Usuario } from './user.service';

/**
 * Servicio de autenticación. Gestiona login, logout y persistencia en localStorage.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   * Usuario actualmente autenticado, almacenado como observable.
   */
  private current$ = new BehaviorSubject<Usuario | null>(null);

  /**
   * Crea una instancia del servicio de autenticación y carga sesión previa desde localStorage si existe.
   * @param userSvc Servicio de usuarios utilizado para validar credenciales.
   */
  constructor(private userSvc: UserService) {
    const raw = localStorage.getItem('currentUser');
    if (raw) this.current$.next(JSON.parse(raw));
  }

  /**
   * Inicia sesión si las credenciales son válidas. Persiste la sesión en localStorage.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @returns `true` si las credenciales coinciden, `false` en caso contrario.
   */
  login(email: string, password: string): boolean {
    const u = this.userSvc.find(email);
    if (u && u.password === password) {
      this.current$.next(u);
      localStorage.setItem('currentUser', JSON.stringify(u));
      return true;
    }
    return false;
  }

  /**
   * Cierra la sesión actual y elimina el usuario del localStorage.
   */
  logout(): void {
    this.current$.next(null);
    localStorage.removeItem('currentUser');
  }

  /**
   * Devuelve el usuario actualmente autenticado.
   * @returns Objeto `Usuario` o `null` si no hay sesión activa.
   */
  getCurrent(): Usuario | null {
    return this.current$.value;
  }
}
