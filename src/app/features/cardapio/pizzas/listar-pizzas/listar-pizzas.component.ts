import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzasService } from '../service/pizzas.service';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-listar-pizzas',
  templateUrl: './listar-pizzas.component.html',
  styleUrls: ['./listar-pizzas.component.scss']
})
export class ListarPizzasComponent implements OnInit{
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  data: any[] = [];

  isAtivo: boolean = true;

  constructor(private service: PizzasService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  

  apiUrlPath(){
    return `http://localhost:8080/api/pizza/ativo/${this.isAtivo}`;  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('Tamanho', 'tamanho'));
    tableHeaders.push(new TableHeader('Preço', 'preco'));
    tableHeaders.push(new TableHeader('Data', 'cadastro'));
    return tableHeaders;
  }

  findAtivo(){
    this.isAtivo = !this.isAtivo;
    this.tableComponent.loadData();
  }
}