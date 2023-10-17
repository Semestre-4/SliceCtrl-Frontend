import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  onInputChange(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}
