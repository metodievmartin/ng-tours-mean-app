import { Tour } from './tour.interface';


export interface SingleTourResponse {
  status: string;
  data: {
    data: Tour;
  };
}
