import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-chips',
  templateUrl: './menu-chips.component.html',
  styleUrls: ['./menu-chips.component.scss']
})
export class MenuChipsComponent {
  selectedItem: string = 'Todos';
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  
  changeColor(item: string): void {
    this.selectedItem = item;
    this.categorySelected.emit(item);
  }
}
