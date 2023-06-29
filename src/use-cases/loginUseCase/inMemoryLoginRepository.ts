import { LoginRepository } from './loginRepository';
import { User } from './types';

export class InMemoryLoginRepository implements LoginRepository {
  users: User[] = [];

  login(user: User): Promise<any> {
    const isEmailValid: boolean = this.users.some(
      el => el.email === user.email,
    );

    const isPasswordValid: boolean = this.users.some(
      el => el.password === user.password,
    );

    if (!isEmailValid) {
      const response = {
        data: {
          status: 500,
          message: 'email is invalid',
        },
      };
      return Promise.resolve(response);
    }

    if (!isPasswordValid) {
      const response = {
        data: {
          status: 500,
          message: 'password is invalid',
        },
      };
      return Promise.resolve(response);
    }
    const response = {
      data: {
        status: 200,
        tokens: {
          accessToken: 'accessToken',
        },
      },
    };
    return Promise.resolve(response);
  }
}
