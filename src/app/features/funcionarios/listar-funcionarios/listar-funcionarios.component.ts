import { Component, OnInit, ViewChild } from '@angular/core';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { FuncionarioService } from '../service/funcionario.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.scss']
})
export class ListarFuncionariosComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  data: any[] = [];

  isAtivo: boolean = true;

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void {
    this.service.getAllFuncionarios().subscribe(
      (response: any[]) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  apiUrlPath() {
    return `http://localhost:8080/api/funcionario/ativo/${this.isAtivo}`;
  }

  callHeaders() {
    let tableHeaders: TableHeader[] = [];
    tableHeaders.push(new TableHeader('Nome do Funcionario', 'nome'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('CPF', 'cpf'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Telefone', 'telefone'));
    tableHeaders.push(new TableHeader('Data', 'cadastro'));
    tableHeaders.push(new TableHeader('', ''));
    return tableHeaders;
  }


  findAtivo() {
    this.isAtivo = !this.isAtivo;
    this.tableComponent.loadData();
  }

}