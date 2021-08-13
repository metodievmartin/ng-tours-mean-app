import { Booking } from './booking.interface';


export interface BookingDetailsResponse{
  status: string;
  results: number;
  data: {
    data: Booking;
  };
}
