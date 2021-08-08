import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() alertType = 'success';
  @Input() message: string | null = null;
  @Output() onClose = new Subject<Event>();

  constructor() { }

  ngOnInit(): void { }

  onCloseClick(event: Event) {
    this.onClose.next(event);
  }
}
