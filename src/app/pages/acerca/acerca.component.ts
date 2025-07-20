import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

/**
 * Componente de la página "Acerca de".
 * Muestra información sobre la tienda Piña Costa.
 */
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  /**
   * Constructor que permite la modificación del título y metadatos.
   * @param title Servicio para establecer el título de la página
   * @param meta Servicio para actualizar etiquetas meta
   */
  constructor(private title: Title, private meta: Meta) { }

  /**
   * Método que se ejecuta al iniciar el componente.
   * Establece el título y descripción de la página.
   */
  ngOnInit(): void {
    this.title.setTitle('Acerca de - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Conoce más sobre la tienda Piña Costa.'
    });
  }
}
