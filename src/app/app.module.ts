import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './template/footer/footer.component';
import { MainMenuComponent } from './template/main-menu/main-menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LogoutComponent } from './logout/logout.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { SideViewComponent } from './side-view/side-view.component';
import { MainMenuElementComponent } from './template/main-menu-element/main-menu-element.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MainMenuComponent,
    AboutComponent,
    ContactComponent,
    PerfilComponent,
    MenuComponent,
    MenuCardComponent,
    AddBookComponent,
    LogoutComponent,
    ListBooksComponent,
    SideViewComponent,
    MainMenuElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
