import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { ClienteService } from '../service/cliente.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  data: any[] = [];

  isAtivo: boolean = true;

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.service.getAllClientes().subscribe(
      (response: any[]) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


  apiUrlPath() {
    return `http://localhost:8080/api/cliente/ativo/${this.isAtivo}`;
  }

  callHeaders() {
    let tableHeaders: TableHeader[] = [];
    tableHeaders.push(new TableHeader('Cliente', 'nome'));
    tableHeaders.push(new TableHeader('CPF', 'cpf'));
    tableHeaders.push(new TableHeader('Telefone', 'telefone'));
    tableHeaders.push(new TableHeader('E-Mail', 'email'));
    tableHeaders.push(new TableHeader('Data', 'cadastro'));
    return tableHeaders;
  }

  findAtivo() {
    this.isAtivo = !this.isAtivo;
    this.tableComponent.loadData();
  }


}
