import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractEntity } from 'src/app/shared/models/abstract-entity';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule extends AbstractEntity{
  username!: string;
  role!: string;
  token!: string;
}
