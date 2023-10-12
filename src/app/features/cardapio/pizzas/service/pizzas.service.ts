import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizzas } from '../pizza';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzasService {


  private baseURL: string = 'http:localhost:8080/api/pizza'
  private http!: HttpClient;

  constructor() { }

  getById(id: number): Observable<Pizzas>{
    return this.http.get<Pizzas>(`${this.baseURL}/id/${id}`);
  }

  getAll(): Observable<Pizzas[]>{
    return this.http.get<Pizzas[]>(`${this.baseURL}/all`)
  }

  getByTamanho(tamanho: Tamanho): Observable<Pizzas[]>{
    return this.http.get<Pizzas[]>(`${this.baseURL}/tamanho/${tamanho}`);
  }

  save(pizza: Pizzas): Observable<HttpStatusCode>{
    return this.http.post<HttpStatusCode>(`${this.baseURL}`, pizza);
  }

  edit(pizza: Pizzas): Observable<HttpStatusCode>{
    return this.http.put<HttpStatusCode>(`${this.baseURL}/${pizza.id}`, pizza)
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/${id}`);
  }
}
