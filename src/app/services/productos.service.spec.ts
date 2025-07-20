// Pruebas del servicio de productos.
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './productos.service';

describe('ProductosService', () => {
  let service: ProductService;

  // Configura el servicio antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
  });

  // Debe inicializarse correctamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
