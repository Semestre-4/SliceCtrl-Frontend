import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StatusPedidoPipe } from './shared/pipes/status-pedido/status-pedido.pipe';
import { TamanhoPizzaPipe } from './shared/pipes/tamanho-pizza/tamanho-pizza.pipe';
import { FormatarPrecoPipe } from './shared/pipes/formatar-preco/formatar-preco.pipe';
import { FormatarDataPipe } from './shared/pipes/formatar-data/formatar-data.pipe';
import { PrePedidoComponent } from './features/pedidos/pre-pedido/pre-pedido.component';
import { MenuPedidoComponent } from './features/pedidos/menu-pedido/menu-pedido.component';
import { FinalizarPedidoComponent } from './features/pedidos/finalizar-pedido/finalizar-pedido.component';
import { SaboresPedidoComponent } from './features/pedidos/sabores-pedido/sabores-pedido.component';
import { ListarClientesComponent } from './features/clientes/listar-clientes/listar-clientes.component';
import { RegistarClientesComponent } from './features/clientes/registar-clientes/registar-clientes.component';
import { ListarProdutosComponent } from './features/cardapio/produtos/listar-produtos/listar-produtos.component';
import { RegistrarProdutosComponent } from './features/cardapio/produtos/registrar-produtos/registrar-produtos.component';
import { ListarPizzasComponent } from './features/cardapio/pizzas/listar-pizzas/listar-pizzas.component';
import { RegistrarPizzasComponent } from './features/cardapio/pizzas/registrar-pizzas/registrar-pizzas.component';
import { ListarSaboresComponent } from './features/cardapio/sabores/listar-sabores/listar-sabores.component';
import { RegistrarSaboresComponent } from './features/cardapio/sabores/registrar-sabores/registrar-sabores.component';
import { ListarIngredientesComponent } from './features/cardapio/ingredientes/listar-ingredientes/listar-ingredientes.component';
import { RegistrarIngredientesComponent } from './features/cardapio/ingredientes/registrar-ingredientes/registrar-ingredientes.component';
import { ListarPedidoComponent } from './features/pedidos/listar-pedido/listar-pedido.component';
import { FuncionariosComponent } from './features/funcionarios/funcionarios.component';
import { GeneralStatsComponent } from './features/dashboard/components/general-stats/general-stats.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TamanhoPizzaPipe,
    StatusPedidoPipe,
    FormatarPrecoPipe,
    ListarPedidoComponent,
    PrePedidoComponent,
    MenuPedidoComponent,
    FinalizarPedidoComponent,
    SaboresPedidoComponent,
    ListarClientesComponent,
    RegistarClientesComponent,
    ListarProdutosComponent,
    RegistrarProdutosComponent,
    ListarPizzasComponent,
    RegistrarPizzasComponent,
    ListarSaboresComponent,
    RegistrarSaboresComponent,
    ListarIngredientesComponent,
    RegistrarIngredientesComponent,
    FuncionariosComponent,
    GeneralStatsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
