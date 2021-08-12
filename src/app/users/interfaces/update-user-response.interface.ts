import { User } from '../../auth/interfaces';


export interface UpdateUserResponse {
  status: string;
  data: {
    user: User
  }
}
