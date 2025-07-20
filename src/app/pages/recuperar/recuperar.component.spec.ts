// Pruebas del formulario para recuperar contraseña.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarComponent } from './recuperar.component';

describe('RecuperarComponent', () => {
  let component: RecuperarComponent;
  let fixture: ComponentFixture<RecuperarComponent>;

  // Configura el módulo para el componente
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarComponent ],
      imports: [ ReactiveFormsModule ]
    }).compileComponents();
  });

  // Crea una instancia limpia
  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Debe construirse sin errores
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
