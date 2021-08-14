import { User } from '../../auth/interfaces';
import { Location, Review, StartLocation } from './index';


export interface Tour {
  startLocation: StartLocation;
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  createdAt: string;
  startDates: string[];
  secretTour: boolean;
  guides: User[];
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Location[],
  slug: string;
  __v: number;
  durationWeeks: number;
  reviews: Review[],
  id: string;
}
