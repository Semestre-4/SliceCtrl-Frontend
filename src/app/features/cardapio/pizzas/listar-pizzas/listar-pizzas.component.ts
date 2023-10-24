import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../service/pizzas.service';
import { TableHeader } from 'src/app/shared/components/table/table-header';

@Component({
  selector: 'app-listar-pizzas',
  templateUrl: './listar-pizzas.component.html',
  styleUrls: ['./listar-pizzas.component.scss']
})
export class ListarPizzasComponent implements OnInit{
  data: any[] = [];

  constructor(private service: PizzasService) { }

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
    return 'http://localhost:8080/api/pizza/all';  
  }

  callHeaders(){
    let tableHeaders : TableHeader[] = [];
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Tamanho', 'tamanho'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Preço', 'preco'));
    tableHeaders.push(new TableHeader('', ''));
    tableHeaders.push(new TableHeader('Data', 'cadastro'));

    console.log(this.data[0].nomeProduto)

    return tableHeaders;
  }
}