// Pruebas del servicio de usuarios.
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  // Se ejecuta antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  // Comprueba la creación del servicio
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
