import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../interfaces';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {
  @Input() booking!: Booking;
  @Input() tourImagesUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
