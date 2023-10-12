import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private baseUrl = 'http://localhost:8080/api/cliente'; 
  
  constructor(private http: HttpClient) { }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/id/${id}`);
  }

  getClientesByNome(nome: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/nome/${nome}`);
  }

  getClientesByCPF(cpf: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${cpf}`);
  }

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/all`);
  }

  cadastrarCliente(cliente: Cliente): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, cliente);
  }

  editarCliente(id: number, cliente: Cliente): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${id}`, cliente);
  }

  excluirCliente(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
