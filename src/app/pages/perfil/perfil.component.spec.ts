// Pruebas del componente Perfil.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  // Configuración mínima para probar
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilComponent]
    });
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Comprueba que se instancie
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
