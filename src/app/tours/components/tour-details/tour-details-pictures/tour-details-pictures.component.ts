import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-details-pictures',
  templateUrl: './tour-details-pictures.component.html',
  styleUrls: ['./tour-details-pictures.component.css']
})
export class TourDetailsPicturesComponent implements OnInit {
  @Input() tourImagesUrl: string | undefined;
  @Input() name: string | undefined;
  @Input() images: string[] | undefined = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
