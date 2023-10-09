import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MainMenuElementComponent } from '../main-menu-element/main-menu-element.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements AfterViewInit {
  loggedInUser: string = ''

  @ViewChild('about') aboutItem!: MainMenuElementComponent
  @ViewChild('contact') contactItem!: MainMenuElementComponent
  @ViewChild('logout') logoutItem!: MainMenuElementComponent

  ngAfterViewInit(): void{
    this.aboutItem.text = "Sobre"
    this.contactItem.text = "Contato"
    this.logoutItem.text = "Sair"
  }
}
