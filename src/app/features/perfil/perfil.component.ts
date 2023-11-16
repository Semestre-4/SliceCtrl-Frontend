import { Component } from '@angular/core';
import { Usuario } from '../funcionarios/funcionario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
usuario = new Usuario();
}
