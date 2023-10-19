import { Component, OnInit, inject } from '@angular/core';
import { Sabores } from '../sabor';
import { Ingredientes } from '../../ingredientes/ingrediente';
import { IngredientesService } from '../../ingredientes/service/ingredientes.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SaboresService } from '../service/sabores.service';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-registrar-sabores',
  templateUrl: './registrar-sabores.component.html',
  styleUrls: ['./registrar-sabores.component.scss'],
})
export class RegistrarSaboresComponent implements OnInit{

  sabor: Sabores = new Sabores();
  ingredientes!: Ingredientes[];
 
  toppings = new FormControl('');


  ingredienteSelecionado!: Ingredientes[]

  constructor(private ingredientesService: IngredientesService, private service: SaboresService){
  } 

  ngOnInit(){
  
  this.findIngredientes();
  }
  
findIngredientes(){

  this.ingredientesService.getAll().subscribe({
    next: i => { 
      this.ingredientes = i;
    },
    error: erro => {
      alert('Exemplo de tratamento de erro! Observe o erro no console!');
    }
  });
}

submit(){
  this.sabor.ingredientesDTOS = this.ingredienteSelecionado;
  console.log("Submit: ", this.sabor.ingredientesDTOS)
  this.service.save(this.sabor).subscribe(
    {
      next: (i) => { 
        console.log(i);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
      }
    });
}
}
