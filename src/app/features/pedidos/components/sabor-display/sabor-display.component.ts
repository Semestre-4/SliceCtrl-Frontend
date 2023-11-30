import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sabores } from 'src/app/features/cardapio/sabores/sabor';

@Component({
  selector: 'app-sabor-display',
  templateUrl: './sabor-display.component.html',
  styleUrls: ['./sabor-display.component.scss']
})
export class SaborDisplayComponent {
  @Input() sabor:Sabores =  new Sabores();
  @Output() addToPizza = new EventEmitter<any>();

  addToPizzaClicked() {
    this.addToPizza.emit(this.sabor);
  }
  
}
