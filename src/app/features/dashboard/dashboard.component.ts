import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { PedidoService } from '../pedidos/service/pedido.service';
import { FormaDePagamento } from 'src/app/shared/models/enums/forma-pagamento';
import { forkJoin } from 'rxjs';
import { Status } from 'src/app/shared/models/enums/status-pedido';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  title = 'ng2-charts-demo';
  produtosMaisPedidos: any[] =[];
  saboresMaisPedidos: any[]=[];
  pedidos: any[]=[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.updatePieChartData();
    this.fetchData();
  }

  public pieChartOptions: ChartOptions = {
    responsive: false,
  };

  fetchData(){
    this.pedidoService.getMostUsedProducts().subscribe((data: any[])=>{
      this.produtosMaisPedidos = data;
    })

    this.pedidoService.getMostUsedSabores().subscribe((data: any[])=>{
      this.saboresMaisPedidos = data;
    })

    this.pedidoService.getPedidosByStatus(Status.PENDENTE).subscribe((data: any[])=>{
      console.log(data+ "data");
      this.pedidos = data;
    })
  }

  public pieChartLabels = ['Credito', 'Pix', 'Dinhero'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


    public pieChartData: ChartDataset[] = [
      { 
        data: [2, 3, 4], 
        backgroundColor: ['rgba(246,114,92,1)', 'rgba(22,91,170,1)', 'rgb(214, 229, 247,1)'] 
      }
    ];
  
  
    updatePieChartData() {
      const creditoObservable = this.pedidoService.countPedidosByFormaDePagamento(FormaDePagamento.CREDITO);
      const pixObservable = this.pedidoService.countPedidosByFormaDePagamento(FormaDePagamento.PIX);
      const dinheiroObservable = this.pedidoService.countPedidosByFormaDePagamento(FormaDePagamento.DINHERO);
  
      forkJoin([creditoObservable, pixObservable, dinheiroObservable]).subscribe(
        ([creditoCount, pixCount, dinheiroCount]) => {
          this.pieChartData[0].data = [creditoCount, pixCount, dinheiroCount];
          console.log(this.pieChartData[0].data);
        }
      );
    }



}