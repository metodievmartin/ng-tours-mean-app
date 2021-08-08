export interface LoginResponse {
  status: string;
  token: string;
  tokenExpirationDate: string;
  data: {
    user: User
  }
}

export interface User {
  photo: string;
  role: string;
  _id: string;
  name: string;
  email: string;
  __v?: number;
  passwordChangedAt?: string;
}
