import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormatarDataPipe } from '../../pipes/formatar-data/formatar-data.pipe';
import { FormatarPrecoPipe } from '../../pipes/formatar-preco/formatar-preco.pipe';
import { TableHeader } from './table-header';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/features/pedidos/service/pedido.service';
import { Status } from '../../models/enums/status-pedido';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headers: TableHeader[] = [];
  @Input() apiUrl: string = ''; 
  @Input() actions: any[] = [];
  @Input() editPath: string = '';
  @Input() entityName: string = '';
  @Input() showDeleteButton: boolean = true;
  @Input() showEndButton: boolean = true;
  @Input() pedidoStatus: string = ''; 
  @Output() buttonClick = new EventEmitter<string>();
  data: any[] = [];
  carregando: boolean = true;

  constructor(private http: HttpClient,
    private datePipe: FormatarDataPipe,
    private numberPipe: FormatarPrecoPipe,
    private p:PedidoService,
    private router: Router
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

  onEditClick(item: any) {
    const entityId = item.id;
    this.router.navigate([`/${this.editPath}`, entityId]);
  }

  onDeleteClick(data: any) {
    if (this.showDeleteButton) {
      const deleteUrl = `http://localhost:8080/api/${this.entityName}/${data.id}`;
      this.http.delete(deleteUrl).subscribe(response => {
        this.loadData();
      });
    }
  }

  onViewClick(item: any) {
    const entityId = item.id;
    this.p.getPedidoById(entityId).subscribe({
      next: (pedido) => {
        this.pedidoStatus = pedido.status;
      },
      error: (error) => {
        console.log(error);
      },
    });
      if(this.pedidoStatus == Status.PENDENTE){
        this.router.navigate([`/pedidos/finalizar-pedido`, entityId]);

  }
  }
  
}


