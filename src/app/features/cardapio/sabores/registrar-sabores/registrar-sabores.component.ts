import { Component, inject } from '@angular/core';
import { Sabores } from '../sabor';
import { Tamanho } from 'src/app/shared/models/enums/tamanho-pizza';
import { Ingredientes } from '../../ingredientes/ingrediente';
import { IngredientesService } from '../../ingredientes/service/ingredientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrar-sabores',
  templateUrl: './registrar-sabores.component.html',
  styleUrls: ['./registrar-sabores.component.scss']
})
export class RegistrarSaboresComponent {

  sabor: Sabores = new Sabores();
  ingredientesTest!: Ingredientes[];

  ingredientesService = inject(IngredientesService);

  ingredientes = Object.values(this.ingredientesService);

  constructor(){
    this.findIngredientes
  } 
  
findIngredientes(){

  this.ingredientesService.getAll().subscribe({
    next: ingredientes => { 
      this.ingredientesTest = ingredientes;
    },
    error: erro => {
      alert('Exemplo de tratamento de erro! Observe o erro no console!');
      console.error(erro);
    }
  });
}
}
