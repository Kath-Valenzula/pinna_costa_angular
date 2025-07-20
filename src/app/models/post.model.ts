/**
 * Modelo que representa una publicación JSONPlaceholder.
 */
export interface Post {
  /** Identificador del usuario que publicó */
  userId: number;

  /** Identificador único del post (opcional en creación) */
  id?: number;

  /** Título del post */
  title: string;

  /** Contenido del post */
  body: string;
}
