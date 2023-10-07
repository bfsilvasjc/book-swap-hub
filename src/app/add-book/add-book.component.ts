import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  generos: any[] = []
  condicoes: any[] = []
  livro: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    // CHAMA ENDPOINT PARA GENEROS
    this.http.get<any[]>('http://localhost:3000/genres')
    .subscribe(data => {
      this.generos = data
    })

    // CHAMA ENDPOINT PARA CONDIÇÕES
    this.http.get<any[]>('http://localhost:3000/conditions')
    .subscribe(data => {
      this.condicoes = data
    })
  }

  onSubmit() {
    this.addBook(this.livro)
    this.router.navigate(['/booklist'])
  }

  addBook(bookData: any) {
    this.http.post('http://localhost:3000/books', bookData)
      .subscribe(response => {
        console.log('Book added successfully:', response)
        window.alert('Livro adicionado com sucesso!')
      }, error => {
        console.error('Error adding book:', error)
        window.alert('Erro ao adicionar livro! Tente novamente.')
      })
  }
}
