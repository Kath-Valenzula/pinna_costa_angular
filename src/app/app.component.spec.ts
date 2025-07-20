// Pruebas unitarias para el componente principal.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CartService } from './services/cart.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  // Prepara el módulo de pruebas
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      providers: [
        {
          provide: CartService,
          useValue: { obtenerCarritoObservable: () => of([]) }
        }
      ]
    }).compileComponents();
  });

  // Instancia el componente antes de cada prueba
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verifica que la app se cree
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
