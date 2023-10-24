import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sabores } from 'src/app/features/cardapio/sabores/sabor';

@Component({
  selector: 'app-chosen-sabores',
  templateUrl: './chosen-sabores.component.html',
  styleUrls: ['./chosen-sabores.component.scss']
})
export class ChosenSaboresComponent {

  @Input() sabor: Sabores = new Sabores();
  @Output() removeSabor = new EventEmitter<Sabores>();

  removeSaborFromList(): void {
    this.removeSabor.emit(this.sabor);
  }
}
