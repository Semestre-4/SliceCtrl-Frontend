import { Injectable } from '@angular/core';
import { Sabores } from '../../cardapio/sabores/sabor';

@Injectable({
  providedIn: 'root'
})
export class PedidoDataService {
  selectedSabores: Sabores[] = [];
  observacao: string = '';
  pedidoId: number = 0;
  pizzaId: number = 0;
}
