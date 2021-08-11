import { Booking } from './booking.interface';


export interface AllBookingsResponse{
  status: string;
  results: number;
  data: {
    data: Booking[];
  };
}
