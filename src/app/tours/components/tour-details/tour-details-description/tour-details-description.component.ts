import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../interfaces';

@Component({
  selector: 'app-tour-details-description',
  templateUrl: './tour-details-description.component.html',
  styleUrls: ['./tour-details-description.component.css']
})
export class TourDetailsDescriptionComponent implements OnInit {
  @Input() startDate: string | undefined;
  @Input() difficulty: string | undefined;
  @Input() maxGroupSize: number | undefined;
  @Input() ratingsAverage: number | undefined;
  @Input() guides: User[] | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
