import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSaboresComponent } from './features/cardapio/sabores/listar-sabores/listar-sabores.component';
import { RegistrarSaboresComponent } from './features/cardapio/sabores/registrar-sabores/registrar-sabores.component';
import { ListarIngredientesComponent } from './features/cardapio/ingredientes/listar-ingredientes/listar-ingredientes.component';
import { RegistrarIngredientesComponent } from './features/cardapio/ingredientes/registrar-ingredientes/registrar-ingredientes.component';
import { ListarPizzasComponent } from './features/cardapio/pizzas/listar-pizzas/listar-pizzas.component';
import { RegistrarPizzasComponent } from './features/cardapio/pizzas/registrar-pizzas/registrar-pizzas.component';
import { ListarProdutosComponent } from './features/cardapio/produtos/listar-produtos/listar-produtos.component';
import { RegistrarProdutosComponent } from './features/cardapio/produtos/registrar-produtos/registrar-produtos.component';
import { ListarClientesComponent } from './features/clientes/listar-clientes/listar-clientes.component';
import { RegistarClientesComponent } from './features/clientes/registar-clientes/registar-clientes.component';
import { ListarPedidoComponent } from './features/pedidos/listar-pedido/listar-pedido.component';
import { PrePedidoComponent } from './features/pedidos/pre-pedido/pre-pedido.component';
import { MenuPedidoComponent } from './features/pedidos/menu-pedido/menu-pedido.component';
import { SaboresPedidoComponent } from './features/pedidos/sabores-pedido/sabores-pedido.component';
import { FinalizarPedidoComponent } from './features/pedidos/finalizar-pedido/finalizar-pedido.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { EditPedidoComponent } from './features/pedidos/edit-pedido/edit-pedido.component';
import { EditProdutoComponent } from './features/cardapio/produtos/edit-produto/edit-produto.component';
import { EditPizzaComponent } from './features/cardapio/pizzas/edit-pizza/edit-pizza.component';
import { EditSaborComponent } from './features/cardapio/sabores/edit-sabor/edit-sabor.component';
import { EditIngredienteComponent } from './features/cardapio/ingredientes/edit-ingrediente/edit-ingrediente.component';
import { EditClienteComponent } from './features/clientes/edit-cliente/edit-cliente.component';
import { IndexComponent } from './core/index/index.component';
import { LoginComponent } from './core/login/login-component/login.component';
import { ListarUsuarioComponent } from './features/usuarios/listar-usuario/listar-usuario.component';
import { RegisterUsuarioComponent } from './features/usuarios/register-usuario/register-usuario.component';
import { EditUsuarioComponent } from './features/usuarios/edit-usuario/edit-usuario.component';
import { RegistrarPerfilUsuarioComponent } from './core/usuario/perfil-usuario/registrar-perfil-usuario/registrar-perfil-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'cardapio',
        children: [
          {
            path: 'sabores',
            children: [
              { path: 'listar', component: ListarSaboresComponent },
              { path: 'register', component: RegistrarSaboresComponent },
              { path: 'edit/:id', component: EditSaborComponent }

            ]
          },
          {
            path: 'ingredientes',
            children: [
              { path: 'listar', component: ListarIngredientesComponent },
              { path: 'register', component: RegistrarIngredientesComponent },
              { path: 'edit/:id', component: EditIngredienteComponent }

            ]
          },
          {
            path: 'pizzas',
            children: [
              { path: 'listar', component: ListarPizzasComponent },
              { path: 'register', component: RegistrarPizzasComponent },
              { path: 'edit/:id', component: EditPizzaComponent }
            ]
          },
          {
            path: 'produtos',
            children: [
              { path: 'listar', component: ListarProdutosComponent },
              { path: 'register', component: RegistrarProdutosComponent },
              { path: 'edit/:id', component: EditProdutoComponent }

            ]
          }
        ]
      },
      {
        path: 'pedidos',
        children: [
          { path: 'listar-pedido', component: ListarPedidoComponent },
          { path: 'pre-pedido', component: PrePedidoComponent },
          { path: 'menu-pedido/:id', component: MenuPedidoComponent },
          { path: 'sabores-pedido/:id', component: SaboresPedidoComponent },
          { path: 'finalizar-pedido/:id', component: FinalizarPedidoComponent },
          { path: 'edit/:id', component: EditPedidoComponent }
        ]
      },
      {
        path: 'clientes',
        children: [
          { path: 'listar', component: ListarClientesComponent },
          { path: 'register', component: RegistarClientesComponent },
          { path: 'edit/:id', component: EditClienteComponent }

        ]
      },
      {
        path: 'usuario',
        children: [
          { path: 'listar', component: ListarUsuarioComponent },
          { path: 'register', component: RegisterUsuarioComponent },
          { path: 'edit/:id', component: EditUsuarioComponent }

        ]
      },
      {
        path: 'perfil',
        children: [
          { path: 'register', component: RegistrarPerfilUsuarioComponent },
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }