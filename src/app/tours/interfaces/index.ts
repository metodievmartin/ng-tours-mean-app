export interface Tour {
}

export interface AllToursResponse {
  status: string;
  results: number;
  data: {
    data: Tour[];
  };
}
