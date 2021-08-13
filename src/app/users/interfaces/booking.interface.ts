import { User } from '../../auth/interfaces';
import { Location } from '../../tours/interfaces';


export interface Booking {
  startedAt: string;
  paid: boolean;
  finishedAt: string;
  status: string;
  _id: string;
  tour: {
    startLocation: {
      type: string;
      coordinates: string[];
      description: string;
      address: string;
    }
    locations: Location[];
    startDates: string[];
    guides: User[],
    _id: string;
    name: string;
    price: number;
    imageCover: string;
    slug: string;
    durationWeeks: number | null;
    id: string;
  },
  user: {
    _id: string;
    name: string;
    email: string;
  },
  price: number;
}
