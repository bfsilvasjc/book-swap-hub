import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  onSubmit() {
    console.log('Usuário:', this.usuario);
    console.log('Senha:', this.senha);
  }
}
