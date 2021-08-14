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
