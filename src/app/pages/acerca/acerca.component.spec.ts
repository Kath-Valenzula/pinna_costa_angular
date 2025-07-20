// Pruebas del componente de la página Acerca.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaComponent } from './acerca.component';

describe('AcercaComponent', () => {
  let component: AcercaComponent;
  let fixture: ComponentFixture<AcercaComponent>;

  // Configura el entorno de pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaComponent]
    });
    fixture = TestBed.createComponent(AcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verifica que el componente se instancie
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
