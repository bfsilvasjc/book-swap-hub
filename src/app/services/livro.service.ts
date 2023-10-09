import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Método para buscar todos os livros
  getLivros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/books`);
  }
}
