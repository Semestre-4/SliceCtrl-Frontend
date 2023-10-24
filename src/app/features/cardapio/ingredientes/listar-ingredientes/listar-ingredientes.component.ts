import { Component, OnInit } from '@angular/core';
import { IngredientesService } from '../service/ingredientes.service';
import { TableHeader } from 'src/app/shared/components/table/table-header';

@Component({
  selector: 'app-listar-ingredientes',
  templateUrl: './listar-ingredientes.component.html',
  styleUrls: ['./listar-ingredientes.component.scss']
})
export class ListarIngredientesComponent implements OnInit{
  data: any[] = [];

  constructor(private service: IngredientesService) { }

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
    return 'http://localhost:8080/api/ingredientes/all';  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Nome do Ingrediente', 'nomeIngrediente'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Quantidade do Ingrediente', 'qtdeIngrediente'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Data', 'cadastro'));

    return tableHeaders;
  }
}