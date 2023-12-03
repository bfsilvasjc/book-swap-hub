import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {
  @Input() title: string = ''
  @Output() cardClicked = new EventEmitter<void>()

  onClick() {
    this.cardClicked.emit()
  }
}
