import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../login';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/features/funcionarios/usuario';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/login';
  http = inject(HttpClient);

  constructor() {}

  public authenticate(login: Login) : Observable<Usuario>{
    return this.http.post<Usuario>(`${this.baseUrl}/authenticate`, login);
  }

  public logout(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/logout');
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }


  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasPermission(role: string) {
    let user = this.jwtDecode() as Usuario;
    if (user.role == role)
      return true;
    else
      return false;
  }
  
}
