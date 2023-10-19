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
import { GeneralStatsComponent } from './features/dashboard/components/general-stats/general-stats.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuChipsComponent } from './features/pedidos/components/menu-chips/menu-chips.component';
import { PedidoService } from './features/pedidos/service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { NewPedidoComponent } from './features/pedidos/components/new-pedido/new-pedido.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ListarFuncionariosComponent } from './features/funcionarios/listar-funcionarios/listar-funcionarios.component';
import { RegisterFuncionariosComponent } from './features/funcionarios/register-funcionarios/register-funcionarios.component';
import { ProductDisplayComponent } from './features/pedidos/components/product-display/product-display.component';
import { SaborDisplayComponent } from './features/pedidos/components/sabor-display/sabor-display.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProdutosService } from './features/cardapio/produtos/service/produtos.service';
import { PizzasService } from './features/cardapio/pizzas/service/pizzas.service';
import { CardapioNavbarComponent } from './features/cardapio/components/cardapio-navbar/cardapio-navbar.component';
import { CardapioNewRegisterComponent } from './features/cardapio/components/cardapio-new-register/cardapio-new-register.component';
import { ChosenPizzaComponent } from './features/pedidos/components/chosen-pizza/chosen-pizza.component';
import { TableComponent } from './shared/components/table/table.component';
import { EditPedidoComponent } from './features/pedidos/edit-pedido/edit-pedido.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    FormatarDataPipe,
    RegistrarSaboresComponent,
    ListarIngredientesComponent,
    RegistrarIngredientesComponent,
    GeneralStatsComponent,
    SearchBarComponent,
    MenuChipsComponent,
    NewPedidoComponent,
    SidebarComponent,
    ListarFuncionariosComponent,
    RegisterFuncionariosComponent,
    ProductDisplayComponent,
    SaborDisplayComponent,
    ChosenPizzaComponent,
    SaborDisplayComponent,
    CardapioNavbarComponent,
    CardapioNewRegisterComponent,
    TableComponent,
    EditPedidoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule, 

  ],
  providers: [PedidoService,ProdutosService,PizzasService,
    FormatarPrecoPipe,
    FormatarDataPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }