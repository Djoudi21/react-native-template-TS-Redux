import { User } from './types';

export interface LoginRepository {
  users: User[];

  login(user: User): Promise<any>;
}
