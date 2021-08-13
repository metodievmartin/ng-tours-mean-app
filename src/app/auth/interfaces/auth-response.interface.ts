import { User } from './index';


export interface AuthResponse {
  status: string;
  token: string;
  tokenExpirationDate: string;
  data: {
    user: User
  }
}
