import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu-element',
  templateUrl: './main-menu-element.component.html',
  styleUrls: ['./main-menu-element.component.css']
})
export class MainMenuElementComponent {
  @Input() text: string = ''
  @Input() ref: string = ''
}
