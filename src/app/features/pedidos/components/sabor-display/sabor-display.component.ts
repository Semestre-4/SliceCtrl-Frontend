import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sabor-display',
  templateUrl: './sabor-display.component.html',
  styleUrls: ['./sabor-display.component.scss']
})
export class SaborDisplayComponent {
  @Input() sabor: any;
  @Output() addToPizza = new EventEmitter<any>();

  addToPizzaClicked() {
    this.addToPizza.emit(this.sabor);
  }
  
}
