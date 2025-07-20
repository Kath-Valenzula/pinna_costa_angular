import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authSpy = jasmine.createSpyObj('AuthService', ['getCurrent']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ { provide: AuthService, useValue: authSpy } ]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    localStorage.clear();
  });

  it('should allow when user exists', () => {
    authSpy.getCurrent.and.returnValue({ email: 'user@example.com', password: '', rol: 'usuario' });
    expect(guard.canActivate()).toBeTrue();
  });

  it('should redirect to /login when no user', () => {
    authSpy.getCurrent.and.returnValue(null);
    spyOn(router, 'navigate');
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
