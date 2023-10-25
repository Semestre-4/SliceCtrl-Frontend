import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientesService } from '../service/ingredientes.service';
import { Ingredientes } from '../ingrediente';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-ingrediente',
  templateUrl: './edit-ingrediente.component.html',
  styleUrls: ['./edit-ingrediente.component.scss']
})
export class EditIngredienteComponent {

  ingrediente: Ingredientes = new Ingredientes();

  id: string;
    
  mensagem: string = '';
  type: string ='';

constructor(private service: IngredientesService, private router: Router, private location: Location){
  const path = location.path();
  const parts = path.split('/');
  this.id = parts[parts.length - 1];
  this.getIngredientesById(this.id);
}

getIngredientesById(id: string){

  this.service.getById(Number(id)).subscribe({
    next: success => {
      this.ingrediente = success
    }});
}


submit(){

  this.service.save(this.ingrediente).subscribe(
    {
      next: (i) => { 
        this.mensagem = 'Editado com sucesso!';
        this.type = 'success';

        setTimeout(() => {this.router.navigate(["/cardapio/ingredientes/listar"])}, 1000 )  
      },
      error: erro => {
        if (erro.status === 200) {
          this.mensagem = 'editado com sucesso!';
          this.type = 'success';
          setTimeout(() => {this.router.navigate(["/cardapio/ingredientes/listar"])}, 1000 )  
        }else{
          this.mensagem = erro.error;
          this.type = 'danger';
        }
    }
    });
}
}