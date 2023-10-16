import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private baseUrl = 'http://localhost:8080/api/funcionario'; 
  
  constructor(private http: HttpClient) { }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrl}/id/${id}`);
  }

  getFuncionariosByNome(nome: string): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrl}/nome/${nome}`);
  }

  getFuncionarioByCPF(cpf: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrl}/cpf/${cpf}`);
  }

  getAllFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrl}/all`);
  }

  cadastrarFuncionario(funcionario: Funcionario): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, funcionario);
  }

  editarFuncionario(id: number, funcionario: Funcionario): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${id}`, funcionario);
  }

  excluirFuncionario(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }

}
 