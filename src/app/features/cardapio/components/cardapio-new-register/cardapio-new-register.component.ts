import { style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-new-register',
  templateUrl: './cardapio-new-register.component.html',
  styleUrls: ['./cardapio-new-register.component.scss']
})
export class CardapioNewRegisterComponent{
  @Input() componenteTexto: string = ''; 
  @Input() navigateUrl: string = '';
}

