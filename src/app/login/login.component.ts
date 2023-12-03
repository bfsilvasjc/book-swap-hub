import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  login: string = ''
  pass: string = ''

  ngOnInit() {
    let login = localStorage.getItem("login")
    if(login !== null && login !== ''){
      this.router.navigate(['/menu'], {
        queryParams: { id: '1', login: login },
      })
    }
  }

  onSubmit() {
    const url = 'http://localhost:3000/users/?login=' + this.login + '&pass=' + this.pass;
    console.log('URL completa:', url);

    this.http.get<any>(url)
    .subscribe(response => {
      if (Array.isArray(response) && response.length > 0) {
        localStorage.setItem("login", this.login)
        this.router.navigate(['/menu'], {
          queryParams: { id: '1', login: this.login },
        })
      } else {
        window.alert('Login não encontrado, por favor revise o login e senha digitados!')
      }
    })
    
  }
}
