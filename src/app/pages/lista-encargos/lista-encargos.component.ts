import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JsonService } from '../../services/json.service';
import { Encargo } from '../../models/encargo.model';

/**
 * Componente que muestra y administra la lista de encargos desde un archivo JSON.
 */
@Component({
  selector: 'app-lista-encargos',
  templateUrl: './lista-encargos.component.html',
  styleUrls: ['./lista-encargos.component.css']
})
export class ListaEncargosComponent implements OnInit {
  /** Lista de encargos obtenidos desde el servicio */
  encargos: Encargo[] = [];

  /** Objeto para agregar un nuevo encargo */
  nuevo: Encargo = { id: 0, nombre: '', descripcion: '', precio: 0 };

  /** Encargo actualmente en edición (si aplica) */
  editando?: Encargo;

  /**
   * Constructor que inyecta el servicio de encargos.
   * @param jsonSvc Servicio encargado de manejar los encargos.
   */
  constructor(private jsonSvc: JsonService) {}

  /** Carga todos los encargos al iniciar el componente. */
  ngOnInit(): void {
    this.cargarEncargos();
  }

  /** Obtiene los encargos desde el servicio. */
  cargarEncargos(): void {
    this.jsonSvc.getEncargos().subscribe(data => (this.encargos = data));
  }

  /**
   * Agrega un nuevo encargo.
   * @param form Formulario de creación.
   */
  agregar(form: NgForm): void {
    if (form.invalid) return;
    this.jsonSvc.addEncargo(this.nuevo).subscribe(() => {
      this.cargarEncargos();
      form.resetForm();
    });
  }

  /**
   * Pone el encargo en modo edición.
   * @param encargo Encargo a editar.
   */
  editar(encargo: Encargo): void {
    this.editando = { ...encargo };
  }

  /**
   * Actualiza el encargo editado.
   * @param form Formulario de edición.
   */
  actualizar(form: NgForm): void {
    if (!this.editando) return;
    this.jsonSvc.updateEncargo(this.editando).subscribe(() => {
      this.cargarEncargos();
      this.cancelar();
      form.resetForm();
    });
  }

  /**
   * Elimina un encargo por su ID.
   * @param id ID del encargo.
   */
  eliminar(id: number): void {
    this.jsonSvc.deleteEncargo(id).subscribe(() => this.cargarEncargos());
  }

  /** Cancela la edición de un encargo. */
  cancelar(): void {
    this.editando = undefined;
  }

  /**
   * Actualiza un campo del encargo actual.
   * @param campo Campo a modificar.
   * @param valor Valor a asignar.
   */
  actualizarCampo<K extends keyof Encargo>(campo: K, valor: Encargo[K]): void {
    if (this.editando) {
      this.editando[campo] = valor;
    } else {
      this.nuevo[campo] = valor;
    }
  }
}
