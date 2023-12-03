import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-view',
  templateUrl: './side-view.component.html',
  styleUrls: ['./side-view.component.css']
})
export class SideViewComponent {
  comentario!: string;
  isSideViewVisible = false;
  
  showSideView() {
    // Mostrar a visualização lateral definindo a variável para true
    this.isSideViewVisible = true;
  }

  hideSideView() {
    // Ocultar a visualização lateral definindo a variável para false
    this.isSideViewVisible = false;
  }
}
