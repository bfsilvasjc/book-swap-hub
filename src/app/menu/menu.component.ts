import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  userLogin: string = ''
  userId: number = 0

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id']
      this.userLogin = params['login']
      console.log('ID do usuário:', this.userId)
      console.log('Login do usuário:', this.userLogin)
    })
  }

  onClick(funcionalidade: number) {
    console.log("Funcionalidade escolhida: " + funcionalidade)
    this.router.navigate(['/profile'], {
      queryParams: { id: this.userId, login: this.userLogin },
    })
  }
}
