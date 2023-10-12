import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabores } from '../sabor';


@Injectable({
  providedIn: 'root'
})
export class SaboresService {


  private baseURL: string = 'http:localhost:8080/api/sabores';
  private http!: HttpClient


  constructor() { }

  getById(id: number): Observable<Sabores>{
    return this.http.get<Sabores>(`${this.baseURL}/id/${id}`);
  }  

  getAll(): Observable<Sabores[]>{
    return this.http.get<Sabores[]>(`${this.baseURL}/all`);
  }  

  getByNome(nome: string): Observable<Sabores>{
    return this.http.get<Sabores>(`${this.baseURL}/nome/${nome}`);
  }

  save(sabor: Sabores): Observable<HttpStatusCode>{
    return this.http.post<HttpStatusCode>(`${this.baseURL}`, sabor);
  }

  edit(sabor: Sabores): Observable<HttpStatusCode>{
    return this.http.put<HttpStatusCode>(`${this.baseURL}/${sabor.id}`, sabor);
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/${id}`);
  }

}
