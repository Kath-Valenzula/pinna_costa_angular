/**
 * @description Define las rutas principales que mapean URLs a componentes.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

import { HomeComponent } from './pages/home/home.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CartComponent } from './pages/cart/cart.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

/**
 * @description Arreglo de rutas utilizado por el enrutador
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', loadChildren: () => import('./pages/catalogo/catalogo.module').then(m => m.CatalogoModule) },
  { path: 'encargos', loadChildren: () => import('./pages/encargos/encargos.module').then(m => m.EncargosModule) },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard] },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'acerca', component: AcercaComponent },
  // Ruta por defecto si no existe coincidencia
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/**
 * @description Módulo que configura el enrutador de la app
 */
export class AppRoutingModule { }
