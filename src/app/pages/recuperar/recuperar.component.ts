import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';

/**
 * Componente para el formulario de recuperación de cuenta. Permite validar datos del usuario y simular recuperación.
 */
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  /** Formulario de recuperación */
  recuperarForm!: FormGroup;

  /** Indica si el formulario fue enviado correctamente */
  enviado = false;

  /** Mensaje de error en caso de datos incorrectos */
  error = '';

  /**
   * Constructor que inyecta servicios de formulario, título y meta etiquetas
   * @param fb FormBuilder para crear formularios reactivos
   * @param title Servicio para cambiar el título del documento
   * @param meta Servicio para modificar meta-etiquetas
   */
  constructor(
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Inicializa el formulario y define campos requeridos
   */
  ngOnInit(): void {
    this.title.setTitle('Recuperar cuenta - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Formulario para recuperar tu contraseña en Piña Costa.'
    });

    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      direccionDespacho: [''],
      fechaNacimiento: ['', Validators.required]
    });
  }

  /**
   * Valida el formulario y simula el proceso de recuperación verificando los datos contra los almacenados en localStorage
   */
  onSubmit(): void {
    if (this.recuperarForm.invalid) {
      this.error = 'Revisa los campos marcados.';
      this.enviado = false;
      return;
    }

    const { email, direccionDespacho, fechaNacimiento } = this.recuperarForm.value;
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const encontrado = usuarios.find(u =>
      u.email === email &&
      u.fechaNacimiento === fechaNacimiento &&
      (!direccionDespacho || u.direccionDespacho === direccionDespacho)
    );

    if (!encontrado) {
      this.error = 'Los datos no coinciden con ninguna cuenta registrada.';
      this.enviado = false;
      return;
    }

    this.enviado = true;
    this.error = '';
    this.recuperarForm.reset();
  }

  /**
   * Limpia el formulario y los mensajes de error/éxito
   */
  limpiar(): void {
    this.recuperarForm.reset();
    this.error = '';
    this.enviado = false;
  }
}
