import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/usuario'; 
  
  constructor(private http: HttpClient) { }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/id/${id}`);
  }

  getUsuariosByNome(nome: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/nome/${nome}`);
  }

  getUsuarioByCPF(cpf: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/cpf/${cpf}`);
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/all`);
  }

  cadastrarUsuario(usuario: Usuario): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${usuario.id}`, usuario);
  }

  excluirUsuario(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }

}