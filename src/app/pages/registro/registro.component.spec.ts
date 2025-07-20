// Pruebas del formulario de registro.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, ValidationErrors } from '@angular/forms';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  // Configura el módulo de pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ FormBuilder ]
    }).compileComponents();
  });

  // Crea el componente para cada caso
  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.clear();
  });

  // Debe incluir los campos de contraseña
  it('debe tener controles password y confirmPassword', () => {
    expect(component.registroForm.contains('password')).toBeTrue();
    expect(component.registroForm.contains('confirmPassword')).toBeTrue();
  });

  // Validador no falla cuando coinciden
  it('passwordsMatchValidator devuelve null si coinciden', () => {
    component.registroForm.get('password')?.setValue('Abc123!');
    component.registroForm.get('confirmPassword')?.setValue('Abc123!');
    const errors: ValidationErrors | null = component.registroForm.errors as ValidationErrors;
    expect(errors).toBeNull();
  });

  // Validador produce error si difieren
  it('passwordsMatchValidator marca error si difieren', () => {
    component.registroForm.get('password')?.setValue('Abc123');
    component.registroForm.get('confirmPassword')?.setValue('Xyz789');
    const errors = component.registroForm.errors as ValidationErrors;
    expect(errors?.['passwordsMismatch']).toBeTrue();
  });

  // Formulario inválido no registra
  it('registrar no procede si el formulario es inválido', () => {
    const setSpy = spyOn(localStorage, 'setItem');
    component.registroForm.get('nombre')?.setValue('');
    component.registroForm.get('email')?.setValue('');
    component.registroForm.get('password')?.setValue('Abc123');
    component.registroForm.get('confirmPassword')?.setValue('Abc123');
    component.registroForm.get('fechaNacimiento')?.setValue('2000-01-01');
    component.registroForm.get('direccionDespacho')?.setValue('');
    component.registroForm.markAllAsTouched();

    component.registrar();
    expect(component.error).toBe('La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.');
    expect(component.mensaje).toBe('');
    expect(setSpy).not.toHaveBeenCalled();
  });

  it('debe aceptar contraseña que cumple el patrón', () => {
    const control = component.registroForm.get('password');
    control?.setValue('Valid1!A');
    expect(control?.valid).toBeTrue();
  });

  it('debe rechazar contraseña que no cumple el patrón', () => {
    const control = component.registroForm.get('password');
    control?.setValue('invalida');
    expect(control?.hasError('pattern')).toBeTrue();
  });

  it('debe registrar usuario si el formulario es válido', () => {
    const setSpy = spyOn(localStorage, 'setItem').and.callThrough();
    component.registroForm.get('nombre')?.setValue('Juan');
    component.registroForm.get('email')?.setValue('juan@example.com');
    component.registroForm.get('password')?.setValue('Valid1!A');
    component.registroForm.get('confirmPassword')?.setValue('Valid1!A');
    component.registroForm.get('fechaNacimiento')?.setValue('2000-01-01');
    component.registroForm.get('direccionDespacho')?.setValue('Dir 1');

    component.registrar();
    expect(component.mensaje).toBe('Cuenta creada correctamente.');
    expect(component.error).toBe('');
    expect(setSpy).toHaveBeenCalled();
  });
});
