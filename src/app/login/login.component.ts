import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
  };

  onSubmit() {
    // Lógica para processar o envio do formulário aqui
  }
}
