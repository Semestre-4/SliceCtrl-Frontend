import { Component } from '@angular/core';
import { FuncionarioService } from '../service/funcionario.service';
import { Router } from '@angular/router';
import { Usuario } from '../funcionario';

@Component({
  selector: 'app-register-funcionarios',
  templateUrl: './register-funcionarios.component.html',
  styleUrls: ['./register-funcionarios.component.scss']
})
export class RegisterFuncionariosComponent {
  
  funcionario: Usuario = new Usuario();


  mensagem: string = '';
  type: string= '';

  constructor(private service: FuncionarioService, private router: Router){}

  submit(){

    this.service.cadastrarFuncionario(this.funcionario).subscribe({
      next: (newFuncionario) => {
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/funcionarios/listar"])
      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/funcionarios/listar"])        }else{
          
          if(erro.error.nome){
            this.mensagem = `${erro.error.nome}`
          }
          if(erro.error.cpf){
            this.mensagem = `${erro.error.cpf}`
          }
          if(erro.error.telefone){
            this.mensagem = `${erro.error.telefone}`
          }


          if(!erro.error.nome && !erro.error.cpf && !erro.error.telefone){
            this.mensagem = erro.error

          }

          this.type = 'danger';
        }
        }
    });
  }
}
