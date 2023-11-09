import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { PedidoService } from '../pedidos/service/pedido.service';
import { FormaDePagamento } from 'src/app/shared/models/enums/forma-pagamento';
import { forkJoin } from 'rxjs';
import { Status } from 'src/app/shared/models/enums/status-pedido';
import { Pedido } from '../pedidos/models/pedido';
import { Router } from '@angular/router';
import { PedidoProduto } from '../pedidos/models/pedido-produto';
import { PedidoPizza } from '../pedidos/models/pedido-pizza';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  title = 'ng2-charts-demo';
  produtosMaisPedidos: PedidoProduto[] =[];
  saboresMaisPedidos: PedidoPizza[]=[];
  pix:number = 0;
  credit: number =0;
  cash:number=0;
  pedidos: any[]=[];
  nums: number[]=[];

  constructor(private pedidoService: PedidoService,private router: Router) { }

  ngOnInit(): void {
    this.updatePieChartData();
    this.fetchData();
    
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels = ['Credito', 'Pix', 'Dinhero'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

    public pieChartData: ChartDataset[] = [
      { 
        data: this.nums, 
        backgroundColor: ['rgba(246,114,92,1)', 'rgba(22,91,170,1)', 'rgb(214, 229, 247,1)'] 
      }
    ];

  fetchData(){
    this.pedidoService.getMostUsedProducts().subscribe((data: any[])=>{
      console.log("produtosMaisPedidos" + this.produtosMaisPedidos)
      this.produtosMaisPedidos = data;
  
    })

    this.pedidoService.getMostUsedSabores().subscribe((data: any[])=>{
      this.saboresMaisPedidos = data;
    })

    this.pedidoService.getPedidosByStatus(Status.PENDENTE).subscribe((data: any[])=>{
      this.pedidos = data;
    })
  }


  
    updatePieChartData() {
      const creditoObservable = this.pedidoService.countPedidosByFormaDePagamento(FormaDePagamento.CREDITO);
      const pixObservable = this.pedidoService.countPedidosByFormaDePagamento(FormaDePagamento.PIX);
      const dinheiroObservable = this.pedidoService.countPedidosByFormaDePagamento(FormaDePagamento.DINHERO);
  
      forkJoin([creditoObservable, pixObservable, dinheiroObservable]).subscribe(
        ([creditoCount, pixCount, dinheiroCount]) => {
          this.cash = dinheiroCount;
          this.pix = pixCount;
          this.credit = creditoCount
          this.nums.push(creditoCount,pixCount,dinheiroCount)
        }
      );
    }

    editar(item:any){
      this.router.navigate([`/pedidos/menu-pedido`, item.id]);
    }


}