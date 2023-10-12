
import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredientes } from '../ingrediente';
import { ThisReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private baseURL: string = 'http:localhost:8080/api/ingredientes'
  private http!: HttpClient;


  constructor() { }

  getById(id: number): Observable<Ingredientes>{
    return this.http.get<Ingredientes>(`${this.baseURL}/${id}`);
  }

  getAll(): Observable<Ingredientes[]>{
    return this.http.get<Ingredientes[]>(`${this.baseURL}/all`);
  }

  getByNome(nome: string): Observable<Ingredientes>{
    return this.http.get<Ingredientes>(`${this.baseURL}/nome/${nome}`);
  }

  save(ingrediente: Ingredientes): Observable<HttpStatusCode>{
    return this.http.post<HttpStatusCode>(`${this.baseURL}`, ingrediente);
  }

  edit(ingrediente: Ingredientes): Observable<HttpStatusCode>{
    return  this.http.put<HttpStatusCode>(`${this.baseURL}/${ingrediente.id}`, ingrediente);
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/${id}`)
  }

}
