import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Interfaz que representa un usuario creado desde el panel de administración.
 */
interface Usuario {
  /** Identificador del usuario */
  id: number;
  /** Nombre del usuario */
  nombre: string;
  /** Correo electrónico */
  email: string;
  /** Contraseña */
  password: string;
  /** Rol asignado (admin o usuario) */
  rol: string;
}

/**
 * Componente que permite crear un nuevo usuario desde el panel de administración.
 */
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  /** Formulario reactivo para ingresar datos del nuevo usuario */
  form!: FormGroup;

  /** Mensaje de error a mostrar en pantalla */
  error = '';

  /**
   * Constructor que inyecta servicios necesarios
   * @param router Servicio de rutas para redireccionar
   * @param title Servicio para modificar el título del documento
   * @param meta Servicio para actualizar etiquetas meta
   * @param fb FormBuilder para construir el formulario
   */
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private fb: FormBuilder
  ) {}

  /**
   * Inicializa el componente configurando título, descripción y formulario
   */
  ngOnInit(): void {
    this.title.setTitle('Crear Usuario - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Formulario para crear usuarios en Piña Costa.'
    });

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
      ]],
      rol: ['', Validators.required]
    });
  }

  /**
   * Crea un nuevo usuario y lo guarda en localStorage. Redirige al panel si se completa correctamente.
   */
  crearUsuario(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error = 'Revisa los campos obligatorios.';
      return;
    }

    const { nombre, email, password, rol } = this.form.value;

    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const nuevoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

    const nuevoUsuario: Usuario = {
      id: nuevoId,
      nombre,
      email,
      password,
      rol
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario creado correctamente.');
    this.form.reset();
    this.error = '';
    this.router.navigate(['/admin']);
  }
}
