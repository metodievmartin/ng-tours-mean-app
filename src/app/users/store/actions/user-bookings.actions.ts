import { createAction, props } from '@ngrx/store';


export const fetchUserBookings = createAction(
  '[User Booking Page] Fetch User Completed Bookings'
);

export const fetchBookingDetails = createAction(
  '[Booking Details Page] Fetch Booking Details',
  props<{ bookingId: string }>()
);
