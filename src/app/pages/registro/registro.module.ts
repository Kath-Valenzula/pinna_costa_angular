import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro.component';

/**
 * Módulo encargado del registro de nuevos usuarios.
 */

const routes: Routes = [
  { path: '', component: RegistroComponent }
];

@NgModule({
  declarations: [RegistroComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
/** Módulo de la página de registro */
export class RegistroModule {}
