import { Component } from '@angular/core';
import { Usuario } from 'src/app/features/funcionarios/funcionario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = new Usuario();
  authenticate(){

  }
}
