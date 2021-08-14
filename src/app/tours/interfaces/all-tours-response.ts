import { Tour } from './tour.interface';


export interface AllToursResponse {
  status: string;
  results: number;
  data: {
    data: Tour[];
  };
}
