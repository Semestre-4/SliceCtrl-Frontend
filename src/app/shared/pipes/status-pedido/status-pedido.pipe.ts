import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPedido'
})
export class StatusPedidoPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'PENDENTE':
        return 'Pendente';
      case 'PAGO':
        return 'Pago';
      case 'CANCELADO':
        return 'Cancelado';
      case 'TODOS':
        return 'Todos';
      default:
        return 'Status inválido';
    }
  }
}
