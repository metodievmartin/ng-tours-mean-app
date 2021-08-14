import { Review } from '../../tours/interfaces';


export interface AllReviewsResponse {
  status: string;
  results: number;
  data: {
    data: Review[];
  };
}
