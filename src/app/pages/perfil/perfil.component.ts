import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

/**
 * Vista para mostrar y editar datos del usuario autenticado. Permite modificar la información, cancelar o cerrar sesión.
 */
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {

  /** Formulario reactivo que contiene los datos editables del usuario */
  perfilForm!: FormGroup;

  /** Datos actuales del usuario autenticado */
  usuario!: Usuario;

  /** Indica si el formulario está en modo edición */
  editando = false;

  /**
   * Constructor que inyecta servicios de formularios, navegación y SEO
   * @param fb FormBuilder para crear el formulario
   * @param router Servicio de navegación para redireccionar tras cerrar sesión
   * @param title Servicio para modificar el título de la página
   * @param meta Servicio para actualizar meta etiquetas
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Carga los datos del usuario desde localStorage y crea el formulario
   */
  ngOnInit(): void {
    this.title.setTitle('Perfil - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Gestiona la información de tu cuenta en Piña Costa.'
    });

    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
      direccionDespacho: [this.usuario.direccionDespacho],
      fechaNacimiento: [this.usuario.fechaNacimiento, Validators.required],
    });
  }

  /**
   * Activa el modo edición para modificar datos
   */
  editar(): void {
    this.editando = true;
  }

  /**
   * Guarda los cambios ingresados al formulario en localStorage
   */
  guardarCambios(): void {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }
    this.usuario = {
      ...this.usuario,
      ...this.perfilForm.value,
    };
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.editando = false;
  }

  /**
   * Cancela la edición y restaura los valores originales del usuario
   */
  cancelar(): void {
    this.editando = false;
    this.perfilForm.reset({
      nombre: this.usuario.nombre,
      email: this.usuario.email,
      direccionDespacho: this.usuario.direccionDespacho,
      fechaNacimiento: this.usuario.fechaNacimiento,
    });
  }

  /**
   * Limpia el formulario pero deja los datos actuales como base
   */
  limpiar(): void {
    this.perfilForm.reset({
      nombre: this.usuario.nombre,
      email: this.usuario.email,
      direccionDespacho: this.usuario.direccionDespacho,
      fechaNacimiento: this.usuario.fechaNacimiento,
    });
  }

  /**
   * Elimina los datos del usuario del almacenamiento local y redirige al inicio
   */
  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
