import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  @ViewChild(MenuCardComponent) menuCardComponent!: MenuCardComponent;

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
    switch(funcionalidade) {
      case 1:
        this.router.navigate(['/profile'], {
          queryParams: { id: this.userId, login: this.userLogin },
        })
        break;
      case 2:
        this.router.navigate(['/addBook'])
        break;
      case 3:
        this.router.navigate(['/bookslist'])
        break;
      default:
        console.log('page dont exist!')
        break;
    }
    
  }
  ngAfterViewInit(): void {
    //demonstração de acesso de um atributo de componente filho por referência
    console.log(`${this.menuCardComponent.title}`)
  }
  
}
