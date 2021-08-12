import { Component, Input, OnInit } from '@angular/core';

import { Tour } from '../../interfaces';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {
  @Input() tour: Tour | undefined;
  @Input() tourImagesUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
