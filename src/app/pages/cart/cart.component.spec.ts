// Pruebas del componente del carrito.
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  // Configura el módulo y el componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [CartService]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Comprueba su creación
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
