// Pruebas del componente Catálogo.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatalogoComponent } from './catalogo.component';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  // Prepara el entorno de pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoComponent ],
      imports: [ HttpClientTestingModule ]
    }).compileComponents();
  });

  // Crea una instancia para cada test
  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Debe inicializarse correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
