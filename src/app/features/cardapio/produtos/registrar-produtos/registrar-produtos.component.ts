import { Component } from '@angular/core';
import { Categoria } from 'src/app/shared/models/enums/categoria';
import { Produtos } from '../produto';

@Component({
  selector: 'app-registrar-produtos',
  templateUrl: './registrar-produtos.component.html',
  styleUrls: ['./registrar-produtos.component.scss']
})
export class RegistrarProdutosComponent {

  categoria!: Categoria;
  produto: Produtos = new Produtos();

  categoriaOption = Object.values(Categoria);

}
