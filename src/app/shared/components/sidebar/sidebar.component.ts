import { Component, ElementRef, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login/login-services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  private readonly login: LoginService;

  isAdmin: boolean;
  isUsarioTecnico: boolean;
  isFuncionario: boolean;

  router = inject(Router);

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.login = inject(LoginService);
    this.isAdmin = this.login.hasPermission('ADMIN');
    this.isUsarioTecnico = this.login.hasPermission('USUARIO_TECNICO');
    this.isFuncionario = this.login.hasPermission('FUNCIONARIO');
  }

  toggleSidebar(): void {
    const sidebar: HTMLElement = this.el.nativeElement.querySelector('.sidebar');
    const content: HTMLElement = this.el.nativeElement.querySelector('.content');

    if (sidebar.classList.contains('collapsed-sidebar')) {
      this.renderer.removeClass(sidebar, 'collapsed-sidebar');
      this.renderer.removeClass(content, 'expanded-content');
    } else {
      this.renderer.addClass(sidebar, 'collapsed-sidebar');
      this.renderer.addClass(content, 'expanded-content');
    }
  }

  logout(): void {
    this.login.logout().subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout error:', error);
      }
    );
  }
}
