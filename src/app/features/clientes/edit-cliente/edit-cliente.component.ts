import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent {
  
  cliente = new Cliente('', '', '', '', [], []);

  id!: string;

  mensagem: string = '';
  type: string= '';

  constructor(private service: ClienteService, private router: Router, private location: Location){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getClienteById(this.id);



  }

  getClienteById(id: string){
    this.service.getClienteById(Number(id)).subscribe({
      next: success => {
        this.cliente = success
      }});
  }


  submit(){

    this.service.cadastrarCliente(this.cliente).subscribe({
      next: (newClientes) => {
        this.mensagem = 'Editado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/clientes/listar"])
      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Editado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/clientes/listar"])
                }else{
          this.mensagem = erro.error;
          this.type = 'danger';

        }
        }
    });
  }
}
