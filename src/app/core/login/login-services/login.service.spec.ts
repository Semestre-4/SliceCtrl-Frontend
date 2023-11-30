import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { LoginService } from './login.service';
import { Login } from '../login';
import { UsuarioModule } from 'src/app/core/usuario/usuario.module';
import { JwtPayload, jwtDecode } from 'jwt-decode';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate the user', () => {
    const login: Login = { cpf: "123.456.789-99", password: "123" };
    const expectedUser: UsuarioModule = {
      id: 1,
      username: 'sampleUsername',
      role: 'admin',
      token: 'sampleToken',
      cadastro: new Date(),
      edicao: new Date(),
      ativo: true
    };
    spyOn(service['http'], 'post').and.returnValue(of(expectedUser));

    service.authenticate(login).subscribe(user => {
      expect(user).toEqual(expectedUser);
    });
  });

  it('should return false if no token is present', () => {
    const role = 'admin';
    spyOn(service, 'jwtDecode').and.returnValue('');

    const hasPermission = service.hasPermission(role);

    expect(hasPermission).toBeFalse();
  });
  it('should log out the user', () => {
    spyOn(service['http'], 'get').and.returnValue(of({}));
  
    service.logout().subscribe(response => {
      expect(response).toEqual({});
    });
  });
  
});
