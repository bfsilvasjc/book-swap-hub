import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  estados: any[] = []
  profileData: any = {}
  userLogin: string = ''
  userId: number = 0
  userPass: string = ''

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.userId = params['id']
      this.userLogin = params['login']
      console.log('ID do usuário:', this.userId)
      console.log('Login do usuário:', this.userLogin)
    })
    
    // CHAMA ENDPOINT PARA ESTADOS
    this.http.get<any[]>('http://localhost:3000/states')
    .subscribe(data => {
      this.estados = data
    })

    this.http.get<any>('http://localhost:3000/profile/?userId=' + this.userId)
    .subscribe(data => {
      this.profileData = data[0]
      console.log(data)
    })
  }

  onFileSelected(event: any) {
    window.alert("Função ainda em desenvolvimento")
  }

  onSubmit() {
    console.log('Estado selecionado:', this.profileData.state)
    this.updateProfile(this.profileData)
    this.router.navigate(['/menu'], {
      queryParams: { id: this.userId, login: this.userLogin },
    })
  }

  updateProfile(profileData : any) {
    this.http.put('http://localhost:3000/profile/' + profileData.id, profileData)
      .subscribe(
        (response) => {
          console.log('Perfil atualizado com sucesso:', response)
          window.alert('Atualizado com sucesso!')
        },
        (error) => {
          console.error('Erro ao atualizar perfil:', error)
          window.alert('Ocorreu um erro, tente novamente!')
        }
      )
  }
  
}
