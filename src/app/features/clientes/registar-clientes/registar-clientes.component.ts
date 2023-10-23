import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-registar-clientes',
  templateUrl: './registar-clientes.component.html',
  styleUrls: ['./registar-clientes.component.scss']
})
export class RegistarClientesComponent {
  
  cliente = new Cliente('', '', '', '', [], []);

  mensagem: string = '';
  type: string= '';

  constructor(private service: ClienteService, private router: Router){}

  submit(){

    this.service.cadastrarCliente(this.cliente).subscribe({
      next: (newClientes) => {
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        setTimeout(() => {this.router.navigate(["/clientes/listar"])}, 1000 )  

      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          setTimeout(() => {this.router.navigate(["/clintes/listar"])}, 1000 )  
        }else{
          this.mensagem = erro.error;
          this.type = 'danger';

        }
        }
    });
  }
}