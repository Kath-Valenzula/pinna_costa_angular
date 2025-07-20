// Pruebas del detalle de producto.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductoDetalleComponent } from './producto-detalle.component';

describe('ProductoDetalleComponent', () => {
  let component: ProductoDetalleComponent;
  let fixture: ComponentFixture<ProductoDetalleComponent>;

  // Configura el módulo y la ruta simulada
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoDetalleComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  // Inicializa el componente
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Comprueba su creación
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
