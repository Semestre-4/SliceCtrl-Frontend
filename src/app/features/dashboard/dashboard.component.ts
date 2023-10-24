import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Credito' ], [ 'Pix' ], 'Dinhero' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ],
    backgroundColor: ['rgba(246,114,92,1)', 'rgba(22,91,170,1)', 'rgb(214, 229, 247,1)'],
    borderColor: ['rgba(246,114,92,1)', 'rgba(22,91,170,1)', 'rgb(214, 229, 247,1)'],
    hoverBackgroundColor: ['rgba(246,114,92,1)', 'rgba(22,91,170,1)', 'rgb(214, 229, 247,1)'],
    hoverBorderColor: ['rgba(246,114,92,1)', 'rgba(22,91,170,1)', 'rgb(214, 229, 247,1)'],
    
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = []

}
