import { UserRepository } from './interfaces/UserRepository';
import { User } from '../use-cases/loginUseCase/types';
import {
  CreatedUserResponse,
  ErrorResponse,
} from '../use-cases/registerUseCase/types';

export class InMemoryUserRepository implements UserRepository {
  users: User[] = [];

  login(user: User): Promise<any> {
    const isEmailValid: User | undefined = this.users.find(
      el => el.email === user.email,
    );

    const isPasswordValid: User | undefined = this.users.find(
      el => el.password === user.password,
    );

    if (!isEmailValid) {
      throw new Error('Email is invalid');
    }

    if (!isPasswordValid) {
      throw new Error('Password is invalid');
    }
    const response = {
      tokens: {
        accessToken: `accessToken${JSON.stringify(user)}`,
        refreshToken: `refreshToken${JSON.stringify(user)}`,
      },
    };
    return Promise.resolve(response);
  }

  register(user: User): Promise<CreatedUserResponse | ErrorResponse> {
    const isUser = this.users.find(el => el.email === user.email);
    if (isUser) {
      throw new Error('User already exists');
    }
    const userWithId = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(userWithId);
    const response: CreatedUserResponse = {
      email: userWithId.email,
      id: userWithId.id,
    };
    return Promise.resolve(response);
  }
}
