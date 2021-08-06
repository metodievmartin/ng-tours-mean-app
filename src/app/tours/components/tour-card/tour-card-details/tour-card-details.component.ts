import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card-details',
  templateUrl: './tour-card-details.component.html',
  styleUrls: ['./tour-card-details.component.css']
})
export class TourCardDetailsComponent implements OnInit {
  @Input() difficulty: string | undefined;
  @Input() duration: number | undefined;
  @Input() summary: string | undefined;
  @Input() startLocation: string | undefined;
  @Input() startDate: string | undefined;
  @Input() maxGroupSize: number | undefined;
  @Input() numberOfStops: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
