import { Component, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/shared/components/table/table-header';
import { SaboresService } from '../service/sabores.service';

@Component({
  selector: 'app-listar-sabores',
  templateUrl: './listar-sabores.component.html',
  styleUrls: ['./listar-sabores.component.scss']
})
export class ListarSaboresComponent implements OnInit{
  data: any[] = [];

  constructor(private service: SaboresService) { }

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
    return 'http://localhost:8080/api/sabores/all';  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('Nome do Sabor', 'nomeSabor'));
    tableHeaders.push(new TableHeader('Ingredientes', 'ingredientes.nomeIngrediente'));
    tableHeaders.push(new TableHeader('Valor Adicional', 'valorAdicional'));
    tableHeaders.push(new TableHeader('Data','cadastro'));
    tableHeaders.push(new TableHeader('Descrição','descricao'));
  
    console.log(this.data[0].nomeProduto)

    return tableHeaders;
  }


}

