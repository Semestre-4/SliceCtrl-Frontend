import { Component } from '@angular/core';
import { Ingredientes } from '../ingrediente';

@Component({
  selector: 'app-registrar-ingredientes',
  templateUrl: './registrar-ingredientes.component.html',
  styleUrls: ['./registrar-ingredientes.component.scss']
})
export class RegistrarIngredientesComponent {

  ingrediente: Ingredientes = new Ingredientes();

}
