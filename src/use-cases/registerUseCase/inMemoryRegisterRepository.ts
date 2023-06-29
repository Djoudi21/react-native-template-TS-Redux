import { RegisterRepository } from './registerRepository';
import { User } from '../loginUseCase/types';
import { BadResponse, GoodResponse } from './types';

export class InMemoryRegisterRepository implements RegisterRepository {
  users: User[] = [];

  register(user: User): Promise<GoodResponse | BadResponse> {
    const isUser = this.users.some(el => el.email === user.email);
    if (isUser) {
      const response: BadResponse = {
        data: {
          status: 500,
          message: 'User already exist',
        },
      };
      return Promise.resolve(response);
    }
    const response: GoodResponse = {
      data: {
        status: 201,
        data: {
          id: '0',
        },
        message: 'User successfully created',
      },
    };
    return Promise.resolve(response);
  }
}
