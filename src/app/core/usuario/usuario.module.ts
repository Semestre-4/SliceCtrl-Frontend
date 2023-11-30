import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractEntity } from 'src/app/shared/models/abstract-entity';
import { RegistrarPerfilUsuarioComponent } from './perfil-usuario/registrar-perfil-usuario/registrar-perfil-usuario.component';

@NgModule({
  declarations: [
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
