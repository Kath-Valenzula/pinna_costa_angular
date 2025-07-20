import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EncargosService } from '../../services/encargos.service';
import { Encargo } from '../../models/encargo.model';

/**
 * Componente que muestra la lista de encargos personalizados disponibles.
 */
@Component({
  selector: 'app-encargos',
  templateUrl: './encargos.component.html',
  styleUrls: ['./encargos.component.css']
})
export class EncargosComponent implements OnInit {

  /** Lista de encargos obtenidos desde el servicio */
  encargos: Encargo[] = [];

  /**
   * Constructor que inyecta los servicios necesarios
   * @param encargosSvc Servicio para obtener encargos
   * @param title Servicio para modificar el título de la página
   * @param meta Servicio para actualizar etiquetas meta
   */
  constructor(
    private encargosSvc: EncargosService,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Inicializa el componente cargando los encargos y configurando metadatos
   */
  ngOnInit(): void {
    this.title.setTitle('Encargos - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Solicita encargos personalizados en Piña Costa.'
    });

    this.encargosSvc.getAll().subscribe(data => {
      this.encargos = data;
    });
  }
}
