import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';

/**
 * Módulo para el listado de productos.
 */

const routes: Routes = [
  { path: '', component: CatalogoComponent }
];

@NgModule({
  declarations: [CatalogoComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)]
})
/** Módulo del catálogo de productos */
export class CatalogoModule {}
