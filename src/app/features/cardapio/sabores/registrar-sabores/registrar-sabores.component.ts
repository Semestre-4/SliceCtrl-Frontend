import { Component, OnInit, inject } from '@angular/core';
import { Sabores } from '../sabor';
import { Ingredientes } from '../../ingredientes/ingrediente';
import { IngredientesService } from '../../ingredientes/service/ingredientes.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SaboresService } from '../service/sabores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-sabores',
  templateUrl: './registrar-sabores.component.html',
  styleUrls: ['./registrar-sabores.component.scss'],
})
export class RegistrarSaboresComponent implements OnInit{

  sabor: Sabores = new Sabores();
  ingredientes!: Ingredientes[];
 
  toppings = new FormControl('');

  
  mensagem: string = '';
  type: string ='';


  ingredienteSelecionado!: Ingredientes[]

  constructor(private ingredientesService: IngredientesService, private service: SaboresService, private router: Router){
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

submit(){
  this.sabor.ingredientesDTOS = this.ingredienteSelecionado;
  console.log("Submit: ", this.sabor.ingredientesDTOS)
  this.service.save(this.sabor).subscribe(
    {
      next: (i) => { 
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/cardapio/sabores/listar"])      },
      error: erro => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/cardapio/sabores/listar"])        }else{

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
}
