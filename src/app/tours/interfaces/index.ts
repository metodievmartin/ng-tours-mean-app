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
  reviews: [],
  id: string;
}

export interface User {
  photo: string;
  role: string;
  _id: string;
  name: string;
  email: string;
}

export interface AllToursResponse {
  status: string;
  results: number;
  data: {
    data: Tour[];
  };
}
