import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usario';
import { UsuarioService } from '../service/usuario.service';
import { Location } from '@angular/common';
import { Role } from 'src/app/shared/models/enums/role';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent {
  usuario: Usuario = new Usuario();
  id: string = '';
  mensagem: string = '';
  type: string = '';
  role = Object.values(Role);

  constructor(private service: UsuarioService, private router: Router, private location: Location) {
    const path = this.location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getFuncionarioById(this.id);
  }

  getFuncionarioById(id: string) {
    this.service.getUsuarioById(Number(id)).subscribe((success: any) => {
      this.usuario = success;
    });
  }


  submit() {

    this.service.editarUsuario(this.usuario).subscribe({
      next: (newFuncionario) => {
        this.mensagem = 'Editado com sucesso!';
        this.type = 'success';

        setTimeout(() => { this.router.navigate(["/usuario/listar"]) }, 1000)

      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Editado com sucesso!';
          this.type = 'success';
          setTimeout(() => { this.router.navigate(["/usuario/listar"]) }, 1000)
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
