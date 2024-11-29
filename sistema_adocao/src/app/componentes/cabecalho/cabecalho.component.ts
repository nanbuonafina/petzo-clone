
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent implements OnInit {
  rotaAtual: string = '';
  isMenuOpen = false; // Add this line to declare the isMenuOpen property

  constructor(private router: Router) {}

  ngOnInit() {
    // Atualiza a rota atual sempre que ela muda
    this.router.events.subscribe(() => {
      this.rotaAtual = this.router.url; // Obtém a URL atual
    });
  }

  // Verifica se a rota corresponde a uma específica
  isOngPage(): boolean {
    return this.rotaAtual === '/home';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
