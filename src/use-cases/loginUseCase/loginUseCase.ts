import { LoginRepository } from './loginRepository';
import { User } from './types';

export class LoginUseCase {
  private loginRepository: LoginRepository;

  constructor(loginRepository: LoginRepository) {
    this.loginRepository = loginRepository;
  }

  async login(user: User) {
    return this.loginRepository.login(user);
  }
}
