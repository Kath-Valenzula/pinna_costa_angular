import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Componente que gestiona el formulario de contacto y los datos de la tienda.
 */
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  /** Formulario reactivo para enviar el mensaje de contacto */
  contactForm!: FormGroup;

  /** Indica si el mensaje fue enviado exitosamente */
  enviado = false;

  /**
   * Constructor que inyecta servicios necesarios
   * @param fb FormBuilder para construir el formulario
   * @param title Servicio para actualizar el título del documento
   * @param meta Servicio para actualizar las etiquetas meta
   */
  constructor(
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Inicializa el formulario y configura metadatos SEO de la página
   */
  ngOnInit(): void {
    this.title.setTitle('Contacto - Piña Costa');
    this.meta.updateTag({
      name: 'description',
      content: 'Ponte en contacto con el equipo de Piña Costa.'
    });

    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Envía el mensaje del formulario si es válido, y marca como enviado
   */
  enviarMensaje(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.enviado = true;
    this.contactForm.reset();
  }

  /**
   * Limpia el formulario y el estado de envío
   */
  limpiar(): void {
    this.contactForm.reset();
    this.enviado = false;
  }
}
