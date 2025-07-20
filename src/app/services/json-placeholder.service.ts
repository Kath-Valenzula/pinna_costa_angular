import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

/**
 * Servicio para interactuar con jsonplaceholder.typicode.com.
 */
@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {
  /** URL base del endpoint de publicaciones */
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  /**
   * Constructor que inyecta HttpClient.
   * @param http Cliente HTTP de Angular
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todas las publicaciones.
   * @returns Observable con array de publicaciones
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  /**
   * Agrega una nueva publicación.
   * @param post Objeto post a crear
   * @returns Observable con el post creado
   */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  /**
   * Actualiza una publicación por ID.
   * @param id ID del post
   * @param post Objeto post con los datos actualizados
   * @returns Observable con el post actualizado
   */
  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post);
  }

  /**
   * Elimina una publicación por ID.
   * @param id ID del post a eliminar
   * @returns Observable void
   */
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
