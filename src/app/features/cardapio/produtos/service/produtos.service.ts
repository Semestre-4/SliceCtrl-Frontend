import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../produto';
import { Categoria } from 'src/app/shared/models/enums/categoria';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseURL: string = 'http://localhost:8080/api/produtos';
  

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.baseURL}/id/${id}`);
  }

  getAll(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.baseURL}/all`);
  }

  getByNome(nome: string): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.baseURL}/nome/${nome}`);
  }

  getByCategoria(categoria: Categoria): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.baseURL}/categoria/${categoria}`);
  }

  getByDisponivel(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.baseURL}/disponivel`);
  }

  getByAtivo(ativo: boolean): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.baseURL}/ativo/${ativo}`);
  }

  save(produto: Produtos): Observable<HttpStatusCode>{
    return this.http.post<HttpStatusCode>(`${this.baseURL}`, produto)
  }

  edit(produto: Produtos): Observable<HttpStatusCode>{
    return this.http.put<HttpStatusCode>(`${this.baseURL}/${produto.id}`, produto);
  }

  delete(id: number): Observable<HttpStatusCode>{
    return this.http.delete<HttpStatusCode>(`${this.baseURL}/${id}`)
  }
}
