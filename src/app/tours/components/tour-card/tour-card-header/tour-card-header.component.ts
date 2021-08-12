import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card-header',
  templateUrl: './tour-card-header.component.html',
  styleUrls: ['./tour-card-header.component.css'],
  host: { 'class': 'card-header' }
})
export class TourCardHeaderComponent implements OnInit {
  @Input() tourImagesUrl = '';
  @Input() imageCover = '';
  @Input() name: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
