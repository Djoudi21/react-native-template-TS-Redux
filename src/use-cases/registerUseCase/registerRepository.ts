import { User } from '../loginUseCase/types';
import { BadResponse, GoodResponse } from './types';

export interface RegisterRepository {
  users: User[];

  register(user: User): Promise<GoodResponse | BadResponse>;
}
