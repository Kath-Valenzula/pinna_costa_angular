import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { UserService, Usuario } from './user.service';

describe('AuthService', () => {
  let service: AuthService;
  let userSvcSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userSvcSpy = jasmine.createSpyObj('UserService', ['find']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: UserService, useValue: userSvcSpy }
      ]
    });
    localStorage.clear();
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login with valid credentials', () => {
    const user: Usuario = { email: 'test@example.com', password: '123', rol: 'usuario' } as any;
    userSvcSpy.find.and.returnValue(user);
    const result = service.login('test@example.com', '123');
    expect(result).toBeTrue();
    expect(service.getCurrent()).toEqual(user);
    expect(localStorage.getItem('currentUser')).toBe(JSON.stringify(user));
  });

  it('should reject invalid credentials', () => {
    const user: Usuario = { email: 'test@example.com', password: '123', rol: 'usuario' } as any;
    userSvcSpy.find.and.returnValue(user);
    const result = service.login('test@example.com', 'wrong');
    expect(result).toBeFalse();
    expect(service.getCurrent()).toBeNull();
    expect(localStorage.getItem('currentUser')).toBeNull();
  });

  it('should logout and clear session', () => {
    const user: Usuario = { email: 'test@example.com', password: '123', rol: 'usuario' } as any;
    userSvcSpy.find.and.returnValue(user);
    service.login('test@example.com', '123');
    service.logout();
    expect(service.getCurrent()).toBeNull();
    expect(localStorage.getItem('currentUser')).toBeNull();
  });
});