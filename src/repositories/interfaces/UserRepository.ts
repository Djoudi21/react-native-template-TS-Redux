import { User } from '../../use-cases/loginUseCase/types';
import {
  CreatedUserResponse,
  ErrorResponse,
} from '../../use-cases/registerUseCase/types';

export interface UserRepository {
  users: User[];

  login(user: User): Promise<any>;

  register(user: User): Promise<CreatedUserResponse | ErrorResponse>;
}
