import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/features/pedidos/models/pedido';
import { PedidoService } from 'src/app/features/pedidos/service/pedido.service';
import { FormaDeEntrega } from 'src/app/shared/models/enums/forma-entrega';
import { Status } from 'src/app/shared/models/enums/status-pedido';

@Component({
  selector: 'app-general-stats',
  templateUrl: './general-stats.component.html',
  styleUrls: ['./general-stats.component.scss']
})
export class GeneralStatsComponent implements OnInit{
  pedidosTotal: number = 0;
  pedidosPagos: number = 0;
  pedidosCancelados: number = 0;
  pedidos: Pedido[] =[];
  pedidosDineIn: number = 0;
  pedidosEntregos: number = 0;
  pedidosRetirados: number = 0;

  constructor(private ps:PedidoService){

  }

  ngOnInit(): void {
    this.ps.getAllPedidos().subscribe(
      (response: any[]) => {
        this.pedidos = response;
        this.pedidosTotal = this.pedidos.length;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.ps.getPedidosByStatus(Status.PAGO).subscribe(
      (response: any[]) => {
        let pedidos = [];
        pedidos = response;
        this.pedidosPagos = pedidos.length;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     );

     this.ps.getPedidosByStatus(Status.CANCELADO).subscribe(
      (response: any[]) => {
        let pedidos = [];
        pedidos = response;
        this.pedidosCancelados = pedidos.length;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     );

     this.ps.getPedidosByFormaDeEntrega(FormaDeEntrega.ENTREGA).subscribe(
      (response: any[]) => {
        let pedidos = [];
        pedidos = response;
        this.pedidosEntregos = pedidos.length;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     )

     this.ps.getPedidosByFormaDeEntrega(FormaDeEntrega.LOCAL).subscribe(
      (response: any[]) => {
        let pedidos = [];
        pedidos = response;
        this.pedidosDineIn = pedidos.length;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     )

     this.ps.getPedidosByFormaDeEntrega(FormaDeEntrega.RETIRADA).subscribe(
      (response: any[]) => {
        let pedidos = [];
        pedidos = response;
        this.pedidosRetirados = pedidos.length;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     )
  }

  

}
