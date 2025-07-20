import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

/**
 * Componente de registro de nuevos usuarios. Incluye validaciones y persistencia local.
 */
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /** Formulario reactivo de registro */
  registroForm!: FormGroup;

  /** Mensaje de error mostrado al usuario */
  error = '';

  /** Mensaje informativo tras el registro */
  mensaje = '';

  /**
   * Constructor para inyectar servicios necesarios
   * @param fb FormBuilder para construir formularios
   * @param title Servicio para modificar el título del documento
   * @param meta Servicio para modificar etiquetas meta
   */
  constructor(
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Inicializa el formulario, el título y meta descripción
   */
  ngOnInit(): void {
    this.title.setTitle('Registro - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Crea una nueva cuenta en Piña Costa.'
    });

    this.registroForm = this.fb.group({
      nombre:            ['', Validators.required],
      email:             ['', [Validators.required, Validators.email]],
      password:          ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
      ]],
      confirmPassword:   ['', Validators.required],
      direccionDespacho: [''],
      fechaNacimiento:   ['', [Validators.required, this.ageValidator]]
    }, { validators: this.passwordsMatchValidator });
  }

  /**
   * Valida que las contraseñas ingresadas coincidan
   * @param group Formulario o grupo de controles
   * @returns ValidationErrors | null
   */
  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const p = group.get('password')?.value;
    const c = group.get('confirmPassword')?.value;
    return p && c && p !== c ? { passwordsMismatch: true } : null;
  }

  /**
   * Valida que el usuario tenga mínimo 13 años
   * @param control Control del formulario (fecha de nacimiento)
   * @returns ValidationErrors | null
   */
  private ageValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (!val) return null;
    const dob = new Date(val);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      age--;
    }
    return age < 13 ? { ageTooLow: true } : null;
  }

  /**
   * Envía el formulario de registro, guarda el usuario en localStorage si es válido
   */
  registrar(): void {
    if (this.registroForm.invalid) {
      if (this.registroForm.errors?.['passwordsMismatch']) {
        this.error = 'Las contraseñas no coinciden.';
      } else if (this.registroForm.get('password')?.hasError('pattern')) {
        this.error = 'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.';
      } else if (this.registroForm.get('fechaNacimiento')?.hasError('ageTooLow')) {
        this.error = 'Debes tener al menos 13 años.';
      } else {
        this.error = 'Revisa los campos obligatorios.';
      }
      this.mensaje = '';
      return;
    }

    const u = this.registroForm.value;
    const nuevo: Usuario = {
      nombre: u.nombre,
      email: u.email,
      password: u.password,
      rol: 'usuario',
      direccionDespacho: u.direccionDespacho,
      fechaNacimiento: u.fechaNacimiento
    };

    const lista: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (lista.some(x => x.email === nuevo.email)) {
      this.error = 'El correo ya está registrado.';
      this.mensaje = '';
      return;
    }

    lista.push(nuevo);
    localStorage.setItem('usuarios', JSON.stringify(lista));
    this.mensaje = 'Cuenta creada correctamente.';
    this.error = '';
    this.registroForm.reset();
  }

  /**
   * Limpia el formulario y los mensajes de estado
   */
  limpiar(): void {
    this.registroForm.reset();
    this.error = '';
    this.mensaje = '';
  }
}
