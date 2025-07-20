import { Component } from '@angular/core';

/**
 * Componente que representa el pie de página del sitio.
 * Muestra el año actual y enlaces a redes sociales.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  /** Año actual mostrado en el footer */
  currentYear: number = new Date().getFullYear();

  /**
   * Constructor del componente.
   * No requiere dependencias.
   */
  constructor() {}

  /**
   * Abre un enlace externo en una nueva pestaña del navegador.
   * @param url URL a abrir
   */
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }
}
