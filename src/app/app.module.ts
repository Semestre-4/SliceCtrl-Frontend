import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StatusPedidoPipe } from './shared/pipes/status-pedido/status-pedido.pipe';
import { TamanhoPizzaPipe } from './shared/pipes/tamanho-pizza/tamanho-pizza.pipe';
import { FormatarPrecoPipe } from './shared/pipes/formatar-preco/formatar-preco.pipe';
import { FormatarDataPipe } from './shared/pipes/formatar-data/formatar-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TamanhoPizzaPipe,
    StatusPedidoPipe,
    FormatarPrecoPipe,
    FormatarDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
