import { Component } from '@angular/core';

/**
 * Componente raíz de la aplicación.
 * Muestra el contenedor principal donde se renderizan los demás componentes.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Título principal de la aplicación */
  title = 'pinna-costa';
}
