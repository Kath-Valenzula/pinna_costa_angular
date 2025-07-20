import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encargo } from '../models/encargo.model';

/**
 * Servicio para obtener encargos desde un archivo JSON local.
 */
@Injectable({ providedIn: 'root' })
export class EncargosService {
  /** Ruta al archivo de encargos local */
  private encargosUrl = 'assets/data/encargos.json';

  /**
   * Constructor del servicio.
   * @param http Cliente HTTP inyectado
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los encargos almacenados en el archivo JSON.
   * @returns Observable con arreglo de encargos
   */
  getAll(): Observable<Encargo[]> {
    return this.http.get<Encargo[]>(this.encargosUrl);
  }
}
