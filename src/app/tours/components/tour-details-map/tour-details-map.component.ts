import { Component, Input, OnInit } from '@angular/core';
import { StartLocation, Location } from '../../interfaces';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tour-details-map',
  templateUrl: './tour-details-map.component.html',
  styleUrls: ['./tour-details-map.component.css']
})
export class TourDetailsMapComponent implements OnInit {
  mapStyle = environment.mapboxMapStyles;
  mapZoom = 7;
  @Input() startLocation!: StartLocation;
  @Input() locations!: Location[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
