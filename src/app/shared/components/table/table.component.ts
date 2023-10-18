import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Pedido } from 'src/app/features/pedidos/models/pedido';
import { FormatarDataPipe } from '../../pipes/formatar-data/formatar-data.pipe';
import { FormatarPrecoPipe } from '../../pipes/formatar-preco/formatar-preco.pipe';
import { TableHeader } from './table-header';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() headers: TableHeader[] = [];
  @Input() apiUrl: string = '';
  @Input() actions: any[] = [];
  data: any[] = [];
  @Output() buttonClick = new EventEmitter<string>();

  carregando: boolean = true;

  constructor(private http: HttpClient,
    private datePipe: FormatarDataPipe,
    private numberPipe: FormatarPrecoPipe,
    ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.carregando = false;
    });
  }

  retornarValor(tableHeader:TableHeader, item: any) {
    const parte = tableHeader.campo.split('.');
    let valor = item;
    for (const p of parte) {
      if(valor != null){
        valor = valor[p];
      }
    }
    try {
      let formatedDate = new Date(valor);
      console.log(formatedDate)
      if(formatedDate.toString() != "Invalid Date" && formatedDate.toString() != "Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time)"){
      valor = this.datePipe.transform(valor);
      }
      if(formatedDate.toString() == "Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time)"){
        valor = this.numberPipe.transform(valor);
      }
    } catch (error) {
      
    }
    return valor;
  }
}


