import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { HttpClient } from '@angular/common/http';
import { Endereco } from 'src/app/shared/models/endereco/endereco';

@Component({
  selector: 'app-registar-clientes',
  templateUrl: './registar-clientes.component.html',
  styleUrls: ['./registar-clientes.component.scss']
})
export class RegistarClientesComponent {
  
  cliente = new Cliente('', '', '', '', [], []);

  mensagem: string = '';
  type: string= '';
  isAddressDisabled: boolean = true;

  enderecos = new Endereco('', 0, '', '', '', '','', '');


  constructor(private service: ClienteService, private router: Router, private http: HttpClient){}

  submit(){

    this.cliente.enderecos[0] = this.enderecos;

    this.service.cadastrarCliente(this.cliente).subscribe({
      next: (newClientes) => {
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/clientes/listar"])
      },
      error: (erro) => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/clientes/listar"])
                }else{
          this.mensagem = erro.error;
          this.type = 'danger';

        }
        }
    });
  }

  fetchAddressDetails(cep: string) {
    console.log(`fetch: ${cep}`)

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
    this.http.get(apiUrl).subscribe((data: any) => {
      this.enderecos.rua = data.logradouro;
      this.enderecos.bairro = data.bairro;
      this.enderecos.cidade = data.localidade;
      this.enderecos.estado = data.uf;
      this.enderecos.complemento = data.complemento;
      this.enderecos.pais = 'Brasil';
    });
  }
}