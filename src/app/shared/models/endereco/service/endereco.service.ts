import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../endereco';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private baseURL: string = 'http:localhost:8080/api/enderecos'
  private http!: HttpClient

  constructor() { }

  getById(id: number): Observable<Endereco>{
    return this.http.get<Endereco>(`${this.baseURL}/id/${id}`);
  }

  getAll(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(`${this.baseURL}/all`)
  }

  getByCep(cep: string): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(`${this.baseURL}/cep/${cep}`);
  } 

  save(endereco: Endereco): Observable<HttpStatusCode>{
    return this.http.post<HttpStatusCode>(`${this.baseURL}`, endereco);
  }

  edit(endereco: Endereco): Observable<HttpStatusCode>{
    return this.http.put<HttpStatusCode>(`${this.baseURL}/${endereco.id}`, endereco);
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/${id}`)
  }

}
