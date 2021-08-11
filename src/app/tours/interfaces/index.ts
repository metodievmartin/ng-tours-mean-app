import { User } from '../../auth/interfaces';

export interface Tour {
  startLocation: {
    type: string;
    coordinates: number[];
    description: string;
    address: string;
  },
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
  locations: [],
  slug: string;
  __v: number;
  durationWeeks: number;
  reviews: Review[],
  id: string;
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
  tour: string;
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
