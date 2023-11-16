import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private baseUrl = 'http://localhost:8080/api/funcionario'; 
  
  constructor(private http: HttpClient) { }

  getFuncionarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/id/${id}`);
  }

  getFuncionariosByNome(nome: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/nome/${nome}`);
  }

  getFuncionarioByCPF(cpf: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/cpf/${cpf}`);
  }

  getAllFuncionarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/all`);
  }

  cadastrarFuncionario(funcionario: Usuario): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, funcionario);
  }

  editarFuncionario(funcionario: Usuario): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${funcionario.id}`, funcionario);
  }

  excluirFuncionario(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }

}
 