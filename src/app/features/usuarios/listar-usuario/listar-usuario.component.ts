import { Component, ViewChild } from '@angular/core';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent {
  @ViewChild(TableComponent) tableComponent!: TableComponent;
  data: any[] = [];
  isAtivo: boolean = true;

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getAllUsuarios().subscribe(
      (response: any[]) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  apiUrlPath() {
    return `http://localhost:8080/api/usuario/ativo/${this.isAtivo}`;
  }

  callHeaders() {
    let tableHeaders: TableHeader[] = [];
    tableHeaders.push(new TableHeader('Nome do Usuario', 'nome'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('CPF', 'cpf'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Telefone', 'telefone'));
    tableHeaders.push(new TableHeader('Role', 'role'));
    tableHeaders.push(new TableHeader('', ''));
    return tableHeaders;
  }


  findAtivo() {
    this.isAtivo = !this.isAtivo;
    this.tableComponent.loadData();
  }

}
