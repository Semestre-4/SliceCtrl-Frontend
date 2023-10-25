import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { PedidoProduto } from '../models/pedido-produto';
import { PedidoPizza } from '../models/pedido-pizza';
import { Pizzas } from '../../cardapio/pizzas/pizza';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  public pedidosEmAndamento: Pedido[] = [];


  public incluirPedidoPizza(pedidoPizza: PedidoPizza, idPedido: number) {
    let index = this.pedidosEmAndamento.findIndex(item => item.id === idPedido);

    if (this.pedidosEmAndamento[index].pizzas == null)
      this.pedidosEmAndamento[index].pizzas = [];

    this.pedidosEmAndamento[index].pizzas.push(pedidoPizza);
  }

  public verificarPedidoEmAndamento(idPedido: number) {
    let index = this.pedidosEmAndamento.findIndex(item => item.id === idPedido);
    if (index == -1)
      return null;
    else
      return this.pedidosEmAndamento[index]; //VERIFICAR SE TENHOQ  TIRAR O PEDIDO DA LISTA
  }



  private baseUrl = 'http://localhost:8080/api/pedido';

  constructor(private http: HttpClient) { }

  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}/id/${id}`);
  }

  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/all`);
  }

  getPedidosByStatus(status: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/status/${status}`);
  }

  countPedidosByFormaDePagamento(formaDePagamento: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/countByFormaDePagamento/${formaDePagamento}`);
  }

  getMostUsedSabores(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.baseUrl}/mostUsedSabores`);
  }

  getMostUsedProducts(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.baseUrl}/mostUsedProducts`);
  }

  getPedidosByFormaDeEntrega(formaDeEntrega: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/formaDeEntrega/${formaDeEntrega}`);
  }

  getPedidosByCliente(clienteId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedido/cliente/${clienteId}`);
  }

  getPedidosByFuncionario(funcionarioId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedido/funcionario/${funcionarioId}`);
  }

  getPedidosWithPagamentoPending(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedido/pagamento-pending`);
  }

  abrirPedido(clienteId: number, funcId: number, formaDeEntrega: string): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.baseUrl}/abrir/${clienteId}/${funcId}/${formaDeEntrega}`, null);
  }

  addProdutoToPedido(pedidoId: number, pedidoProduto: PedidoProduto): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/adicionar/produto/${pedidoId}`, pedidoProduto);
  }

  addPizzaPedido(pedidoId: number, pedidoPizza: PedidoPizza): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/adicionar/pizza/${pedidoId}`, pedidoPizza);
  }

  finalizarPedido(pedidoId: number, formDePagamento: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${pedidoId}/pagamento/${formDePagamento}`, null);
  }

  updateOrderByUser(pedido:Pedido): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, pedido);
  }
}
