import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Módulo que agrupa las vistas de administración.
 */

const routes: Routes = [
  { path: '', component: AdminComponent }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
/** Módulo de la sección administrativa */
export class AdminModule {}
