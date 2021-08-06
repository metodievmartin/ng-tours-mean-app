import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-tour-details-header',
  templateUrl: './tour-details-header.component.html',
  styleUrls: ['./tour-details-header.component.css']
})
export class TourDetailsHeaderComponent implements OnInit {
  @Input() tourImagesUrl: string | undefined;
  @Input() imageCover: string | undefined;
  @Input() name: string | undefined;
  @Input() duration: number | undefined;
  @Input() location: string | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}
