import { Component } from '@angular/core';
import { Ingredientes } from '../ingrediente';
import { IngredientesService } from '../service/ingredientes.service';

@Component({
  selector: 'app-registrar-ingredientes',
  templateUrl: './registrar-ingredientes.component.html',
  styleUrls: ['./registrar-ingredientes.component.scss']
})
export class RegistrarIngredientesComponent {

  ingrediente: Ingredientes = new Ingredientes();

constructor(private service: IngredientesService){}

submit(){

  this.service.save(this.ingrediente).subscribe();

}
}