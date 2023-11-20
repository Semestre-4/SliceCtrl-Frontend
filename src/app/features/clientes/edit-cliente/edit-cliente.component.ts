import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Endereco } from 'src/app/shared/models/endereco/endereco';
import { HttpClient } from '@angular/common/http';
import { EnderecoService } from 'src/app/shared/models/endereco/service/endereco.service';



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
  isAddressDisabled: boolean = true;

  enderecos = new Endereco('', 0, '', '', '', '','', '');

  constructor(private service: ClienteService, private router: Router, private location: Location, private http: HttpClient, private enderecoService: EnderecoService){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getClienteById(this.id);
  }

  getClienteById(id: string){
    this.service.getClienteById(Number(id)).subscribe({
      next: success => {
        this.cliente = success
        this.enderecos.id = this.cliente.enderecos[0].id;
        this.enderecos = this.cliente.enderecos[0]
      }});
  }


  submit(){

    
    this.cliente.enderecos[0] = this.enderecos;

    console.log(this.cliente.enderecos[0]);

    this.service.editarCliente(Number(this.id), this.cliente).subscribe({
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
         if(erro.error.nome){
           this.mensagem = `${erro.error.nome}`
         }
         if(erro.error.cpf){
           this.mensagem = `${erro.error.cpf}`
         }
         if(erro.error.telefone){
           this.mensagem = `${erro.error.telefone}`
         }
         if(erro.error.email){
           this.mensagem = `${erro.error.email}`
         }
         if(erro.error.enderecos){
           this.mensagem = `${erro.error.enderecos}`
         }
         if(!erro.error.nome && !erro.error.cpf && !erro.error.telefone && !erro.error.email && !erro.error.enderecos ){
           this.mensagem = erro.error
               }
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
