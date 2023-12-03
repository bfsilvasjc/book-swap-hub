import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText: string;

  constructor() {
    this.aboutText = `
      Bem-vindo ao Book Swap Hub - a sua plataforma para compartilhar e trocar livros com outros amantes da leitura!

      O Book Swap Hub foi criado com a missão de conectar pessoas que compartilham a paixão pela leitura e desejam trocar livros de forma fácil e divertida. Nossa plataforma oferece uma maneira conveniente de encontrar outros leitores e expandir sua coleção de livros sem gastar dinheiro.

      Principais recursos do Book Swap Hub:

      - Catálogo de Livros: Explore uma vasta biblioteca de livros dos usuários, incluindo romances, não-ficção, fantasia e muito mais.
      - Troca de Livros: Encontre pessoas interessadas em trocar livros e inicie trocas diretamente através da plataforma.
      - Comunidade de Leitores: Conecte-se com outros leitores, compartilhe recomendações de leitura e participe de discussões sobre seus livros favoritos.
      - Perfil Personalizado: Crie seu perfil, adicione livros à sua estante virtual e acompanhe suas trocas e interações.

      Esperamos que você aproveite o Book Swap Hub para descobrir novos livros, fazer novos amigos e expandir sua paixão pela leitura. Junte-se a nós hoje mesmo e comece a explorar o maravilhoso mundo dos livros!
    `;
  }

  ngOnInit(): void {
  }
}