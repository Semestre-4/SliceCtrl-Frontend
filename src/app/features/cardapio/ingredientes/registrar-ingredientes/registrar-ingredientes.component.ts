import { Component } from '@angular/core';
import { Ingredientes } from '../ingrediente';
import { IngredientesService } from '../service/ingredientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ingredientes',
  templateUrl: './registrar-ingredientes.component.html',
  styleUrls: ['./registrar-ingredientes.component.scss']
})
export class RegistrarIngredientesComponent {

  ingrediente: Ingredientes = new Ingredientes();

    
  mensagem: string = '';
  type: string ='';

constructor(private service: IngredientesService, private router: Router){}

submit(){

  this.service.save(this.ingrediente).subscribe(
    {
      next: (i) => { 
        this.mensagem = 'Cadastrado com sucesso!';
        this.type = 'success';

        this.router.navigate(["/cardapio/ingredientes/listar"])
            },
      error: erro => {
        if (erro.status === 200) {
          this.mensagem = 'Cadastrado com sucesso!';
          this.type = 'success';
          this.router.navigate(["/cardapio/ingredientes/listar"])        }else{
          if(erro.error.nomeIngrediente){
            this.mensagem = `${erro.error.nomeIngrediente}`
          }
          if(erro.error.qtdeIngrediente){
            this.mensagem = `${erro.error.qtdeIngrediente}`
          }

          if(!erro.error.nomeIngrediente && !erro.error.qtdeIngrediente){
            this.mensagem = erro.error
  
          } 
          this.type = 'danger';
        }
    }
    });
}
}