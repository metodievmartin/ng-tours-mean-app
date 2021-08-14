import { User } from '../../auth/interfaces';

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

export interface StartLocation {
  type: string;
  coordinates: number[];
  description: string;
  address: string;
}

export interface Location {
  type: string;
  coordinates: number[];
  description: string;
  day: number;
  _id: string;
}

export interface AllToursResponse {
  status: string;
  results: number;
  data: {
    data: Tour[];
  };
}

export interface Review {
  createdAt: string;
  _id: string;
  review: string;
  rating: number;
  user: {
    photo: string;
    _id: string;
    name: string;
  };
  tour: {
    name: string;
    slug: string;
  };
  __v: number;
  id: string;
}

export interface SingleTourResponse {
  status: string;
  data: {
    data: Tour;
  };
}

export interface CheckoutSessionResponse {
  status: string;
  data: CheckoutSession
}
export interface CheckoutSession {
  checkoutSessionId: string;
  stripePublicKey: string;
}
