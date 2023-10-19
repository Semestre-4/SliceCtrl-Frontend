import { Component } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { TableHeader } from 'src/app/shared/components/table/table-header';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent {
  data: any[] = [];

  constructor(private service: ProdutosService) { }

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
    return 'http://localhost:8080/api/produtos/all';  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('Nome do Produto', 'nomeProduto'));
    tableHeaders.push(new TableHeader('Categoria', 'categoria'));
    tableHeaders.push(new TableHeader('Estoque', 'qtdeEstoque'));
    tableHeaders.push(new TableHeader('Data','cadastro'));
    tableHeaders.push(new TableHeader('Preço','preco'));
    tableHeaders.push(new TableHeader('Disponivel','disponivel'));
    return tableHeaders;
  }


}

