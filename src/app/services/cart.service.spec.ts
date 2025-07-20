// Pruebas del servicio del carrito.
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  // Inicializa el servicio antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  // Debe crearse sin problemas
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
