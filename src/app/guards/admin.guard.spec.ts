import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminGuard } from './admin.guard';
import { AuthService } from '../services/auth.service';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router: Router;
  let authSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authSpy = jasmine.createSpyObj('AuthService', ['getCurrent']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authSpy }
      ]
    });
    guard = TestBed.inject(AdminGuard);
    router = TestBed.inject(Router);
    localStorage.clear();
  });

  it('should allow admin user', () => {
    authSpy.getCurrent.and.returnValue({ rol: 'admin', email: '', password: '' });
    expect(guard.canActivate()).toBeTrue();
  });

  it('should redirect normal user to /perfil', () => {
    authSpy.getCurrent.and.returnValue({ rol: 'usuario', email: 'user@example.com', password: '' });
    spyOn(router, 'navigate');
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/perfil']);
  });

  it('should redirect unauthenticated user to /login', () => {
    authSpy.getCurrent.and.returnValue(null);
    spyOn(router, 'navigate');
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
