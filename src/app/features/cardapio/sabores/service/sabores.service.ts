import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabores } from '../sabor';


@Injectable({
  providedIn: 'root'
})
export class SaboresService {


  private baseURL: string = 'http://localhost:8080/api/sabores';


  constructor(  private http: HttpClient
    ) { }

  getById(id: number): Observable<Sabores>{
    return this.http.get<Sabores>(`${this.baseURL}/id/${id}`);
  }  

  getAll(): Observable<Sabores[]>{
    return this.http.get<Sabores[]>(`${this.baseURL}/all`);
  }  

  getByNome(nome: string): Observable<Sabores>{
    return this.http.get<Sabores>(`${this.baseURL}/nome/${nome}`);
  }

  save(sabor: Sabores): Observable<string>{
    console.log("Service: ", sabor.ingredientesDTOS)
    return this.http.post<string>(`${this.baseURL}`, sabor);
  }

  edit(sabor: Sabores): Observable<HttpStatusCode>{
    return this.http.put<HttpStatusCode>(`${this.baseURL}/${sabor.id}`, sabor);
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/${id}`);
  }

}
