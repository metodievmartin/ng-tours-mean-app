import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card-footer',
  templateUrl: './tour-card-footer.component.html',
  styleUrls: ['./tour-card-footer.component.css']
})
export class TourCardFooterComponent implements OnInit {
  @Input() price: number | undefined;
  @Input() ratingsAverage: number | undefined;
  @Input() slug: string | undefined;
  @Input() ratingsQuantity: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
