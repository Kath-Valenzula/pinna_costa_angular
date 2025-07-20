import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { EncargosComponent } from './encargos.component';

const routes: Routes = [
  { path: '', component: EncargosComponent }
];

@NgModule({
  declarations: [EncargosComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)]
})
export class EncargosModule {}
