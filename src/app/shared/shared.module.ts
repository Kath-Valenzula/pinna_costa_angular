/**
 * @description Módulo que exporta componentes compartidos.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  // Componentes que pertenecen a este módulo
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  // Módulos utilizados internamente
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  // Elementos disponibles para otros módulos
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
/**
 * @description Módulo de componentes reutilizables
 */
export class SharedModule { }
