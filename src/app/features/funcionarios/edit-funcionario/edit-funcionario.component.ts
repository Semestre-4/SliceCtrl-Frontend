import { Component } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../service/funcionario.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.scss']
})
export class EditFuncionarioComponent {
  
  funcionario: Funcionario = new Funcionario();

  id: string ='';

  mensagem: string = '';
  type: string= '';

  constructor(private service: FuncionarioService, private router: Router, private location: Location){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getFuncionarioById(this.id);

  }

  
  getFuncionarioById(id: string){
    this.service.getFuncionarioById(Number(id)).subscribe({
      next: success => {
        this.funcionario = success
      }});
  }


  submit(){

    this.service.editarFuncionario(this.funcionario).subscribe({
      next: (newFuncionario) => {
        this.mensagem = 'Editado com sucesso!';
        this.type = 'success';

        setTimeout(() => {this.router.navigate(["/funcionarios/listar"])}, 1000 )  

      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Editado com sucesso!';
          this.type = 'success';
          setTimeout(() => {this.router.navigate(["/funcionarios/listar"])}, 1000 )  
        }else{
          this.mensagem = erro.error;
          this.type = 'danger';
        }
        }
    });
  }
}