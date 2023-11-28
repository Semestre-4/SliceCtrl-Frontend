import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractEntity } from 'src/app/shared/models/abstract-entity';
import { ListarPerfilUsuarioComponent } from './perfil-usuario/listar-perfil-usuario/listar-perfil-usuario.component';
import { RegistrarPerfilUsuarioComponent } from './perfil-usuario/registrar-perfil-usuario/registrar-perfil-usuario.component';

@NgModule({
  declarations: [
    ListarPerfilUsuarioComponent,
    RegistrarPerfilUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule extends AbstractEntity{
  username!: string;
  role!: string;
  token!: string;
}
