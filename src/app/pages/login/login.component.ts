import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * Componente que permite a los usuarios iniciar sesión validando sus credenciales.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  /** Formulario de inicio de sesión */
  loginForm!: FormGroup;

  /** Mensaje de error al validar el formulario */
  error = '';

  /**
   * Constructor con inyección de dependencias
   * @param fb FormBuilder para crear el formulario
   * @param router Controlador de rutas
   * @param title Servicio para establecer el título de la página
   * @param meta Servicio para actualizar etiquetas meta
   * @param auth Servicio de autenticación
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private auth: AuthService
  ) {}

  /**
   * Inicializa metadatos y formulario reactivo para iniciar sesión
   */
  ngOnInit(): void {
    this.title.setTitle('Iniciar sesión - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Accede a tu cuenta de Piña Costa.'
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
      ]]
    });
  }

  /**
   * Valida credenciales y navega según el rol del usuario autenticado
   */
  iniciarSesion(): void {
    if (this.loginForm.invalid) {
      this.error = 'Revisa los campos marcados.';
      return;
    }

    const { email, password } = this.loginForm.value;
    const ok = this.auth.login(email, password);
    if (!ok) {
      this.error = 'Correo o contraseña incorrectos';
      return;
    }

    const usuario = this.auth.getCurrent();
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate([usuario.rol === 'admin' ? '/admin' : '/perfil']);
    }
  }

  /**
   * Limpia el formulario y los mensajes de error
   */
  limpiar(): void {
    this.loginForm.reset();
    this.error = '';
  }

  /**
   * Redirige a la pantalla de recuperación de contraseña
   */
  recuperarPassword(): void {
    this.router.navigate(['/recuperar']);
  }

  /**
   * Redirige a la pantalla de registro de nuevo usuario
   */
  registrarse(): void {
    this.router.navigate(['/registro']);
  }
}
