import { style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardapio-new-register',
  templateUrl: './cardapio-new-register.component.html',
  styleUrls: ['./cardapio-new-register.component.scss']
})
export class CardapioNewRegisterComponent implements OnInit{
  componenteTexto!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.definirTextoDoComponente();
  }

  definirTextoDoComponente() {
    const paginaAtual = this.router.url;
    const element = document.getElementById('new');

    if (paginaAtual.includes('produtos')) {
      this.componenteTexto = 'Novo Produto';
    } else if (paginaAtual.includes('pizzas')) {
      this.componenteTexto = 'Nova Pizza';
    } else if (paginaAtual.includes('sabores')) {
      this.componenteTexto = 'Novo Sabor';
    } else if (paginaAtual.includes('ingredientes')) {
      this.componenteTexto = 'Novo Ingrediente';
      
    } else {
      this.componenteTexto = '...';
    }
  }

  navigateTo(){
    const paginaAtual = this.router.url;
  
    if (paginaAtual.includes('produtos')) {
    this.router.navigate(["/cardapio/produtos/register"]);  
    } else if (paginaAtual.includes('pizzas')) {
      this.router.navigate(["/cardapio/pizzas/register"]);  
    } else if (paginaAtual.includes('sabores')) {
      this.router.navigate(["/cardapio/sabores/register"]);  
    } else if (paginaAtual.includes('ingredientes')) {
      this.router.navigate(["/cardapio/ingredientes/register"]);  
    } else {
      this.componenteTexto = '...';
    }
  } 
}

