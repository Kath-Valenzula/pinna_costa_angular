/**
 * @description Módulo principal que reúne componentes y servicios.
 */
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CartComponent } from './pages/cart/cart.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ListaEncargosComponent } from './pages/lista-encargos/lista-encargos.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

@NgModule({
  // Componentes de la aplicación
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoDetalleComponent,
    CartComponent,
    RecuperarComponent,
    PerfilComponent,
    ContactoComponent,
    CreateUserComponent,
    AcercaComponent,
    ListaEncargosComponent,
    ListaProductosComponent
  ],
  // Módulos que se utilizan
  imports: [
    BrowserModule,
    CommonModule,            
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (userSvc: UserService) => () => userSvc.init(),
      deps: [UserService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
/**
 * @description Módulo raíz de Angular
 */
export class AppModule { }