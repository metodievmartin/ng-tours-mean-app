import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tour-details-cta',
  templateUrl: './tour-details-cta.component.html',
  styleUrls: ['./tour-details-cta.component.css']
})
export class TourDetailsCtaComponent implements OnInit {
  @Input() tourImagesUrl!: string;
  @Input() isAuthenticated = false;
  @Input() duration!: number;
  @Input() isPurchaseStarted = false;
  @Input() images: string[] = [];
  @Output() onBookTour = new Subject<Event>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onBookTourClicked(event: Event) {
    this.onBookTour.next(event)
  }
}
