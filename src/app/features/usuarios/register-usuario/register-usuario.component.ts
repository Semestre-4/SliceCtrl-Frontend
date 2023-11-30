import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../service/usuario.service';
import { Role } from 'src/app/shared/models/enums/role';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.scss']
})
export class RegisterUsuarioComponent {

  usuario: Usuario = new Usuario('', '', '', Role.FUNCIONARIO, '', 0, [])
  ;
  role = Object.values(Role);
  mensagem: string = '';
  type: string = '';

  constructor(private service: UsuarioService, private router: Router) { }

  submit() {

    this.service.cadastrarUsuario(this.usuario).subscribe({
      next: (newFuncionario) => {
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/usuario/listar"])
      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/usuario/listar"])
        } else {

          if (erro.error.nome) {
            this.mensagem = `${erro.error.nome}`
          }
          if (erro.error.cpf) {
            this.mensagem = `${erro.error.cpf}`
          }
          if (erro.error.telefone) {
            this.mensagem = `${erro.error.telefone}`
          }


          if (!erro.error.nome && !erro.error.cpf && !erro.error.telefone) {
            this.mensagem = erro.error

          }

          this.type = 'danger';
        }
      }
    });
  }
}
