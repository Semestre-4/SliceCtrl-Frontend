import { Component, EventEmitter, Output } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleSidebar() {
    const sidebar = this.el.nativeElement.querySelector('.sidebar');
    const content = this.el.nativeElement.querySelector('.content');

    if (sidebar.classList.contains('collapsed-sidebar')) {
      this.renderer.removeClass(sidebar, 'collapsed-sidebar');
      this.renderer.removeClass(content, 'expanded-content');
    } else {
      this.renderer.addClass(sidebar, 'collapsed-sidebar');
      this.renderer.addClass(content, 'expanded-content');
    }
  }



}