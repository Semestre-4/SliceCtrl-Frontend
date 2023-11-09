import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { Location } from '@angular/common';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit{
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  data: any[] = [];

  isAtivo: boolean = true;

  constructor(private service: ProdutosService, private location: Location) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response: any[]) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  apiUrlPath(){
    return `http://localhost:8080/api/produtos/ativo/${this.isAtivo}`;  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('Nome do Produto', 'nomeProduto'));
    tableHeaders.push(new TableHeader('Categoria', 'categoria'));
    tableHeaders.push(new TableHeader('Estoque', 'qtdeEstoque'));
    tableHeaders.push(new TableHeader('Data','cadastro'));
    tableHeaders.push(new TableHeader('Preço','preco'));
    tableHeaders.push(new TableHeader('Disponivel','disponivel'));
  
    console.log(this.data[0].nomeProduto)

    return tableHeaders;
  }

  findAtivo(){
    this.isAtivo = !this.isAtivo;
    this.tableComponent.loadData();
  }


}

