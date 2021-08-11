import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces';

@Component({
  selector: 'app-tour-details-reviews',
  templateUrl: './tour-details-reviews.component.html',
  styleUrls: ['./tour-details-reviews.component.css']
})
export class TourDetailsReviewsComponent implements OnInit {
  @Input() reviews: Review[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
