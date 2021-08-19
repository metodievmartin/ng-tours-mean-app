import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  templateUrl: './burger-icon.component.html',
  styleUrls: ['./burger-icon.component.css']
})
export class BurgerIconComponent {
  @Input() color: string = '#f7f7f7'; // default color: #f7f7f7
  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }
}
