import { Component, OnInit, inject } from '@angular/core';
import { Sabores } from '../sabor';
import { Ingredientes } from '../../ingredientes/ingrediente';
import { IngredientesService } from '../../ingredientes/service/ingredientes.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SaboresService } from '../service/sabores.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/core/login/login-services/login.service';

@Component({
  selector: 'app-edit-sabor',
  templateUrl: './edit-sabor.component.html',
  styleUrls: ['./edit-sabor.component.scss']
})
export class EditSaborComponent implements OnInit{

  sabor: Sabores = new Sabores();
  ingredientes!: Ingredientes[];
 
  id: string

  toppings = new FormControl('');

  
  mensagem: string = '';
  type: string ='';


  ingredienteSelecionado!: Ingredientes[]

  constructor(private ingredientesService: IngredientesService, private service: SaboresService, private router: Router, private location: Location, private loginService: LoginService){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getSaborById(this.id);

  }

  ngOnInit(){  
    this.findIngredientes();
  
  }

  findIngredientes(){
  
    this.ingredientesService.getAll().subscribe({
      next: i => { 
        this.ingredientes = i;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
      }
    });
  }

  getSaborById(id: string){
    this.service.getById(Number(id)).subscribe({
      next: success => {
        this.sabor = success
        this.ingredienteSelecionado = this.sabor.ingredientesDTOS
      }});
  }
  
  
submit(){
  let permission: boolean = this.loginService.hasPermission('ADMIN')
  let permission2: boolean = this.loginService.hasPermission('FUNCIONARIO_CHEF');

  if(permission || permission2){
  this.sabor.ingredientesDTOS = this.ingredienteSelecionado;
  console.log("Submit: ", this.sabor.ingredientesDTOS)
  this.service.edit(this.sabor).subscribe(
    {
      next: (i) => { 
        this.mensagem = 'Editado com sucesso!';
        this.type = 'success';

        setTimeout(() => {this.router.navigate(["/cardapio/sabores/listar"])}, 1000 )  
      },
      error: erro => {
        if (erro.status === 200) {
          this.mensagem = 'Editado com sucesso!';
          this.type = 'success';
          setTimeout(() => {this.router.navigate(["/cardapio/sabores/listar"])}, 1000 )  
        }else{
          if(erro.error.nomeSabor){

            this.mensagem = `${erro.error.nomeSabor}`

          }
          if(erro.error.ingredientesDTOS){
            this.mensagem = `${erro.error.ingredientesDTOS}`

          }

          if(!erro.error.ingredientesDTOS && !erro.error.nomeSabor){
            this.mensagem = erro.error

          }
          this.type = 'danger';
        }
    }
    });
  }
  else{
    this.type = 'danger';
    this.mensagem = 'ACESSO NEGADO! Você não tem permissão para realizar essa ação.'
  }
}
}
