import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormatarDataPipe } from '../../pipes/formatar-data/formatar-data.pipe';
import { FormatarPrecoPipe } from '../../pipes/formatar-preco/formatar-preco.pipe';
import { TableHeader } from './table-header';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from 'src/app/features/pedidos/service/pedido.service';
import { Status } from '../../models/enums/status-pedido';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

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
  @Output() editButtonClick = new EventEmitter<any>();
  @Output() editButtonEndClick = new EventEmitter<any>();
  data: any[] = [];
  carregando: boolean = true;

  constructor(private http: HttpClient,
    private datePipe: FormatarDataPipe,
    private numberPipe: FormatarPrecoPipe,
    private p:PedidoService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.data = data;
      this.carregando = false;
    });
  }

  onEditClick(item: any) {
    const entityId = item.id;
    const urlSegments = this.route.snapshot.url.map(segment => segment.path);
    
    if(urlSegments.includes('pedido') || urlSegments.includes('pedidos')){
        this.p.getPedidoById(entityId).subscribe({
          next: (pedido) => {
            this.pedidoStatus = pedido.status;
            if (this.pedidoStatus !== Status.PENDENTE) {
              this.editButtonClick.emit(item);
            } else {
              this.router.navigate([`/${this.editPath}`, entityId]);
            }
          },
          error: (error) => {
            this.router.navigate([`/${this.editPath}`, entityId]);
          },
        });
    } else {
      this.editButtonClick.emit(item);
      this.router.navigate([`/${this.editPath}`, entityId]);
    }
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
      if(formatedDate.toString() != "Invalid Date" && formatedDate.toString() != "Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time)"){
      valor = this.datePipe.transform(valor);
      }

    } catch (error) {
      
    }
    return valor;
  }

  // onEditClick(item: any) {
  //   const entityId = item.id;
  //   this.router.navigate([`/${this.editPath}`, entityId]);
  // }

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
      if (this.pedidoStatus !== Status.PENDENTE) {
        this.editButtonEndClick.emit(item);
      } else {
        this.router.navigate([`/pedidos/finalizar-pedido`, entityId]);
}
    },
    error: (error) => {
      console.log(error);
    },
  });
  }
  
}


