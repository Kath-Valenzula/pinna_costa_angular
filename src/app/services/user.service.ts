import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/** Representa un usuario registrado en el sistema. */
export interface Usuario {
  /** Correo electrónico del usuario */
  email: string;
  /** Contraseña del usuario */
  password: string;
  /** Rol del usuario ('admin' o 'usuario') */
  rol: 'admin' | 'usuario';
}

/** Interfaz que define las operaciones del servicio de usuarios. */
export interface IUserService {
  /** Obtiene todos los usuarios */
  getAll(): Usuario[];
  /** Busca un usuario por email */
  find(email: string): Usuario | undefined;
  /** Agrega un nuevo usuario */
  add(user: Usuario): void;
  /** Actualiza un usuario existente */
  update(user: Usuario): void;
  /** Elimina un usuario por email */
  delete(email: string): void;
  /** Inicializa los datos desde localStorage */
  init(): Promise<void>;
}

/** Servicio para manejar usuarios usando localStorage. */
@Injectable({ providedIn: 'root' })
export class UserService implements IUserService {
  /** Clave usada para almacenar usuarios en localStorage */
  private STORAGE_KEY = 'pinna-users';

  /** Ruta al archivo JSON con usuarios por defecto */
  private usersUrl = 'assets/data/usuarios.json';

  /** Lista de usuarios observables actualizable */
  private users$ = new BehaviorSubject<Usuario[]>([]);

  /**
   * Constructor del servicio
   * @param http Cliente HTTP para cargar datos desde archivo JSON
   */
  constructor(private http: HttpClient) {}

  /**
   * Inicializa el almacenamiento con usuarios desde localStorage o desde archivo.
   * @returns Promesa que resuelve al terminar la carga
   */
  public init(): Promise<void> {
    return new Promise(resolve => {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        this.users$.next(JSON.parse(raw));
        resolve();
        return;
      }
      this.http.get<Usuario[]>(this.usersUrl).subscribe(data => {
        this.users$.next(data);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        resolve();
      }, () => resolve());
    });
  }

  /**
   * Retorna todos los usuarios almacenados.
   * @returns Lista de usuarios
   */
  public getAll(): Usuario[] {
    return this.users$.value;
  }

  /**
   * Busca un usuario por correo electrónico.
   * @param email Correo del usuario a buscar
   * @returns Usuario encontrado o `undefined`
   */
  public find(email: string): Usuario | undefined {
    return this.getAll().find(u => u.email === email);
  }

  /**
   * Agrega un nuevo usuario al sistema.
   * @param user Usuario a registrar
   */
  public add(user: Usuario): void {
    const list = this.getAll();
    list.push(user);
    this.save(list);
  }

  /**
   * Actualiza la información de un usuario existente.
   * @param user Usuario con los datos nuevos
   */
  public update(user: Usuario): void {
    const list = this.getAll().map(u => u.email === user.email ? user : u);
    this.save(list);
  }

  /**
   * Elimina un usuario por su correo electrónico.
   * @param email Correo del usuario a eliminar
   */
  public delete(email: string): void {
    const list = this.getAll().filter(u => u.email !== email);
    this.save(list);
  }

  /**
   * Guarda la lista de usuarios actualizada en localStorage.
   * @param list Lista de usuarios
   */
  private save(list: Usuario[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    this.users$.next(list);
  }
}
