import { Component, ViewChild } from '@angular/core';
import { SideViewComponent } from '../side-view/side-view.component';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  livros: any[] = [];

  constructor(private livroService: LivroService) { }

  @ViewChild(SideViewComponent) sideViewComponent!: SideViewComponent;

  ngOnInit() {
    this.livroService.getLivros()
      .subscribe(data => {
        this.livros = data;
        console.log(data)
      });
  }

  getCardClass(genero: string): string {
    // Mapear gênero para uma classe de cor de contorno
    switch (genero) {
      case 'Ficção':
        return 'border-primary';
      case 'Mistério':
        return 'border-success';
      case 'Ficção Científica':
        return 'border-info';
      case 'Romance':
        return 'border-danger';
      case 'Fantasia':
        return 'border-warning';
      default:
        return 'border-secondary';
    }
  }

  showDetails(livro: any) {
    this.sideViewComponent.comentario = livro.comentario
    this.sideViewComponent.showSideView();
  }

  hideSideView() {
    this.sideViewComponent.hideSideView()
  }
}
